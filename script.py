import pandas as pd
from neo4j import GraphDatabase
from tqdm import tqdm
import questionary
import os
import time


def get_clean_data(data):
    if pd.isna(data) or not data or data == "[]":
        return []
    else:
        return eval(data)[0]


# 定义导入MP数据的函数
def import_MP_data(tx, et1, rsp, et2, year):
    query = (
        "MERGE (entity1:MP_%s {name: $et1})" % (str(year))
        + "MERGE (entity2:MP_%s {name: $et2}) " % (str(year))
        + "MERGE (entity1)-[relation:%s {type: $rsp}]->(entity2)" % (rsp.upper())
    )
    tx.run(query, et1=et1, rsp=rsp, et2=et2, year=year)


def import_R_data(tx, et1, rsp, et2, year):
    query = (
        "MERGE (entity1:R_%s {name: $et1})" % (str(year))
        + "MERGE (entity2:R_%s {name: $et2}) " % (str(year))
        + "MERGE (entity1)-[relation:%s {type: $rsp}]->(entity2)" % (rsp.upper())
    )
    tx.run(query, et1=et1, rsp=rsp, et2=et2, year=year)


def main():
    WORKPATH = os.getcwd()
    IMPORTPATH = os.path.join(WORKPATH, "待导入文件目录")
    if not os.path.exists(IMPORTPATH):
        os.mkdir(IMPORTPATH)

    file_list = os.listdir(IMPORTPATH)

    if file_list == []:
        print("\033[31m待导入文件目录不存在文件,请先添加待导入数据文件重试!\033[0m")
        input("按任意键关闭脚本")
        return

    selected_database = questionary.select("请选择你要导入的数据库:", ["MP", "R", "退出程序"]).ask()
    if selected_database == "退出程序":
        print("程序已经退出")
        return exit(0)

    input("请确保您已开启数据库,按任意键继续导入操作")

    # 连接到Neo4j数据库
    uri = "bolt://localhost:7687"  # 你的Neo4j数据库URI

    username = input(f"请输入您的{selected_database}数据库用户名: ")  # 您的Neo4j用户名
    password = input(f"请输入您的{selected_database}数据库密码: ")  # 您的Neo4j密码

    driver = GraphDatabase.driver(uri, auth=(username, password))
    if not driver.verify_authentication(auth=(username, password)):
        print("用户名密码错误,请关闭程序重试")
        return

    options = {
        file: [file, file.split("_")[0]] for file in file_list if file.endswith(".xlsx")
    }

    selects = questionary.checkbox(
        "请选择你要导入的文件(如非规定格式则为当前年份,上下键选择,空格确定):", options
    ).ask()

    for selected in selects:
        year = (
            options[selected][1]
            if options[selected][1].isnumeric()
            else time.localtime(time.time())[0]
        )

        # 读取Excel文件
        xlsx_path = f"{WORKPATH}/待导入文件目录/{options[selected][0]}"  # 你的Excel文件路径
        df = pd.read_excel(xlsx_path, usecols=[12, 15, 17])  # 读取特定的列

        print(f"按ctrl+c即可中断程序,{selected}导入中...")
        # 使用tqdm显示进度条
        for _, row in tqdm(df.iterrows(), total=df.shape[0]):
            data1 = get_clean_data(row.iloc[0])
            data2 = get_clean_data(row.iloc[1])
            data3 = get_clean_data(row.iloc[2])

            with driver.session() as session:
                if selected_database == "MP":
                    if data1 and len(data1) == 3:
                        session.execute_write(
                            import_MP_data, data1[0], data1[1], data1[2], year
                        )
                    if data2 and len(data2) == 3:
                        session.execute_write(
                            import_MP_data, data2[0], data2[1], data2[2], year
                        )

                    if data3 and len(data3) == 3:
                        session.execute_write(
                            import_MP_data, data3[0], data3[1], data3[2], year
                        )
                else:
                    if data3 and len(data3) == 3:
                        session.execute_write(
                            import_R_data, data3[0], data3[1], data3[2], year
                        )
        print(f"\033[32m{selected}导入完成\033[0m")

    # 关闭数据库连接
    driver.close()
    print("\033[32m导入完成\033[0m")
    input("按任意键关闭脚本")


main()
