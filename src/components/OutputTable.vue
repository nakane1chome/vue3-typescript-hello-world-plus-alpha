<template>
  <div class="results">
    <h2>{{msg}}</h2>
    <table>
      <tr><th>Total Payments</th><td>{{format(results.total_payment)}}</td></tr>
      <tr><th>Total Interest</th><td>{{format(results.total_interest)}}</td></tr>
      <tr><th>Monthly Payment</th><td>{{alias_money_format(results.monthly_payment)}}</td></tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {LoanResults} from "../model/LoanCalc"

import {format as money_format} from 'v-money3';

@Options({
  props: {
    msg: String,
    results: LoanResults
  }
})

export default class OutputTable extends Vue {
    results!: LoanResults;
    alias_money_format = money_format;
    format(v: number) : string {
      return "$" + money_format(v);
   }
}

</script>

<style scoped>
.results {
  text-align: left;
}
</style>
