<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

<script lang="ts" setup>
import { FiledPropsDefine } from '../types'
const props = defineProps(FiledPropsDefine)

function handleChange(e: any) {
  console.log(e)
  props.onChange(e.target.value)
}
</script>

<style></style>
