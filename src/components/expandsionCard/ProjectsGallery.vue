<template>
  <div class="flex flex-col-reverse sm:flex-col">
    <div class="flex flex-col-reverse sm:flex-row justify-around items-center mb-4">
        <div class="w-full sm:w-[32%] mb-4">
            <ExpandsionCard>
                <template v-slot:srcImg>
                    <img src="../../assets/projects/WorkoutTracker.jpg" alt="">
                </template>
                <template v-slot:title>Workout Tracker</template>
                <template v-slot:stacks>React Js, Node Js, Express, MongoDB</template>
                <template v-slot:code><a href="https://github.com/bankah-junior/Workout-Tracker">code</a></template>
            </ExpandsionCard>
        </div>
        <div class="w-full sm:w-[32%] mb-4">
            <ExpandsionCard>
                <template v-slot:srcImg>
                    <img src="../../assets/projects/bfx-calculator.png" alt="">
                </template>
                <template v-slot:title>Forex Calculator</template>
                <template v-slot:stacks>React Js, TailwindCSS</template>
                <template v-slot:visit><a href="https://bfx-calculator.netlify.app/">Visit</a></template>
                <template v-slot:code><a href="https://github.com/bankah-junior/bfx-calculator">code</a></template>
            </ExpandsionCard>
        </div>
        <div class="w-full sm:w-[32%] mb-4">
            <ExpandsionCard>
                <template v-slot:srcImg>
                    <img src="../../assets/projects/ConnectToBuyers.png" alt="">
                </template>
                <template v-slot:title>Connect To Buyers</template>
                <template v-slot:stacks>HTML, JavaScript, Bootstrap</template>
                <template v-slot:visit><a href="https://ctbs.netlify.app/">Visit</a></template>
                <template v-slot:code><a href="https://github.com/bankah-junior/Frontend-Part-2/tree/1)Connect-To-Buyers">code</a></template>
            </ExpandsionCard>
        </div>
    </div>
    <div class="flex flex-col-reverse sm:flex-row justify-around items-center">
        <div class="w-full sm:w-[32%] mb-4">
            <ExpandsionCard>
                <template v-slot:srcImg>
                    <img src="../../assets/projects/MindMeld.png" alt="">
                </template>
                <template v-slot:title>MindMeld</template>
                <template v-slot:stacks>React Js, TailwindCSS</template>
                <template v-slot:visit><a href="https://mindmeld.netlify.app/">Visit</a></template>
                <template v-slot:code><a href="https://github.com/bankah-junior/-MindMeld-">code</a></template>
            </ExpandsionCard>
        </div>
        <div class="w-full sm:w-[32%] mb-4">
            <ExpandsionCard>
                <template v-slot:srcImg>
                    <img src="../../assets/projects/MyRecipe.png" alt="">
                </template>
                <template v-slot:title>My Recipe</template>
                <template v-slot:stacks>Node Js, Express, MongoDB</template>
                <template v-slot:code><a href="https://github.com/bankah-junior/My-Recipe">code</a></template>
            </ExpandsionCard>
        </div>
        <div class="w-full sm:w-[32%] mb-4">
            <ExpandsionCard>
                <template v-slot:srcImg>
                    <img src="../../assets/projects/pipsBank.png" alt="">
                </template>
                <template v-slot:title>Pips Bank</template>
                <template v-slot:stacks>React Js, TailwindCSS</template>
                <template v-slot:visit><a href="https://pipsbank.netlify.app/">Visit</a></template>
                <template v-slot:code><a href="https://github.com/bankah-junior/-pips-bank-">code</a></template>
            </ExpandsionCard>
        </div>
    </div>
  </div>
</template>

<script>
import { ExpandsionCard } from '../../components/index'
export default {
  components: {
    ExpandsionCard
  }
}
</script>

<style>

</style>