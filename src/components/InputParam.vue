<template>
<div class="input">
<h2>{{msg}}</h2>
<table>
<tr>
  <th>Principal:</th> <td><money3 v-model="params.principal" v-bind="config" ></money3> {{ params.principal }}</td>
</tr>
<tr>
  <th>Term (Years):</th><td>
    <input v-model.number="params.term_years" type="number" /> {{params.term_years}}
    <vue-slider v-model="params.term_years"  min=0 max=35 interval=1 />
  </td>
</tr>
<tr>
  <th>Interest Rate:</th><td> 
    <input v-model.number="params.rate_percent" type="number" /> {{params.rate_percent}}
    <vue-slider v-model="params.rate_percent" min=0 max=20 interval=0.1 />
  </td>
</tr>
</table>
</div>
</template>

<script lang="ts">
import {Options, Vue } from 'vue-class-component';
import {LoanParams} from "../model/LoanCalc"

@Options({
  props: {
    msg: String,
    params: LoanParams
  },
})
export default class InputParam extends Vue {
  msg!: string;
  params!: LoanParams;
}
</script>

<style scoped>
.input {
  text-align: left;
}
</style>
