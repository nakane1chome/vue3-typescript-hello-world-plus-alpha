<template>
  <h1>Hello World +alpha</h1>
  <InputParam :params=loan_params msg="Input Parameters" />
  <OutputTable :results=results() msg="Calculated Results" />
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import {LoanCalc, LoanParams, LoanResults} from "./model/LoanCalc"

export default class App extends Vue {
     loan_calc!: LoanCalc;
     loan_params!: LoanParams;
     data(): Record<string, unknown>  {
         var params = new LoanParams(500000, 25, 3.0);
         var loan_calc = new LoanCalc(params);
         return {
             'loan_calc' : loan_calc,
             'loan_params' : params,
         }
     }
    results(): LoanResults {
        return this.loan_calc.calc();
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
