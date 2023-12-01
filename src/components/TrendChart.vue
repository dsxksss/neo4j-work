<script setup>
import { ref, onMounted } from "vue";

const placement = ref("left");
const type = ref("card");

</script>

<template>
    <n-tabs class="pane-wrapper" size="large" :key="type + placement" type="card" animated placement="left">
        <n-tab-pane name="疾病" tab="疾病">
            <n-grid :x-gap="0" :y-gap="50" :cols="3">
                <n-grid-item>

                    <div>
                        <n-image width="320" height="200"
                            src="https://cdn2.axureshop.com/wp-content/uploads/2021/04/14282-230002856404.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://cdn2.axureshop.com/wp-content/uploads/2021/04/14282-230002856404.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>
                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://cdn2.axureshop.com/wp-content/uploads/2021/04/14282-230002856404.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://cdn2.axureshop.com/wp-content/uploads/2021/04/14282-230002856404.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://cdn2.axureshop.com/wp-content/uploads/2021/04/14282-230002856404.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>

                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://cdn2.axureshop.com/wp-content/uploads/2021/04/14282-230002856404.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
            </n-grid>
        </n-tab-pane>
        <n-tab-pane name="蛋白质" tab="蛋白质">
            <n-grid :x-gap="0" :y-gap="50" :cols="3">
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://www.omegaxyz.com/wp-content/uploads/2020/08/LinuxOps.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://www.omegaxyz.com/wp-content/uploads/2020/08/LinuxOps.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://www.omegaxyz.com/wp-content/uploads/2020/08/LinuxOps.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://www.omegaxyz.com/wp-content/uploads/2020/08/LinuxOps.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://www.omegaxyz.com/wp-content/uploads/2020/08/LinuxOps.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://www.omegaxyz.com/wp-content/uploads/2020/08/LinuxOps.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
            </n-grid>
        </n-tab-pane>
        <n-tab-pane name="有机物" tab="有机物">
            <n-grid :x-gap="0" :y-gap="50" :cols="3">
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://5b0988e595225.cdn.sohucs.com/images/20180223/b17052646aa0400484b7169791f41114.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>
                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://5b0988e595225.cdn.sohucs.com/images/20180223/b17052646aa0400484b7169791f41114.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>
                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://5b0988e595225.cdn.sohucs.com/images/20180223/b17052646aa0400484b7169791f41114.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>
                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://5b0988e595225.cdn.sohucs.com/images/20180223/b17052646aa0400484b7169791f41114.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>
                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://5b0988e595225.cdn.sohucs.com/images/20180223/b17052646aa0400484b7169791f41114.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>
                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://5b0988e595225.cdn.sohucs.com/images/20180223/b17052646aa0400484b7169791f41114.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>
                </n-grid-item>
            </n-grid>
        </n-tab-pane>
        <n-tab-pane name="药物" tab="药物">
            <n-grid :x-gap="0" :y-gap="50" :cols="3">
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://www.omegaxyz.com/wp-content/uploads/2020/07/aminer-kg.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://www.omegaxyz.com/wp-content/uploads/2020/07/aminer-kg.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://www.omegaxyz.com/wp-content/uploads/2020/07/aminer-kg.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://www.omegaxyz.com/wp-content/uploads/2020/07/aminer-kg.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://www.omegaxyz.com/wp-content/uploads/2020/07/aminer-kg.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
                <n-grid-item>
                    <div>
                        <n-image width="320" height="200"
                            src="https://www.omegaxyz.com/wp-content/uploads/2020/07/aminer-kg.png" />
                    </div>
                    <span>2023-11-24 11:29 xxx图</span>

                </n-grid-item>
            </n-grid>
        </n-tab-pane>
    </n-tabs>
</template>

<style scoped>
.pane-wrapper {
    height: 90vh;

}

image {
    object-fit: cover;
}
</style>