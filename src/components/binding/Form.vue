<template>
  <h2>v-model Form binding</h2>
  <div>
    <div class="container">
      <select v-model="selected">
        <option value="1">서울</option>
        <option value="2">대전</option>
        <option value="3">대구</option>
        <option value="4">부산</option>
      </select>
    </div>
    <div class="valueBox">selected: {{ selected }}</div>
  </div>
  <div>
    <div class="container">
      <input type="checkbox" id="seoul" v-model="checked" value="서울" />
      <label for="seoul">서울</label>
      <input type="checkbox" id="daejeon" v-model="checked" value="대전" />
      <label for="daejeon">대전</label>
      <input type="checkbox" id="daegu" v-model="checked" value="대구" />
      <label for="daegu">대구</label>
      <input type="checkbox" id="busan" v-model="checked" value="부산" />
      <label for="busan">부산</label>
    </div>
    <div class="valueBox">checked: {{ checked }}</div>
  </div>
  <div>
    <div class="container">
      <input v-model="checkedRadio" type="radio" value="수도권" id="capital" />
      <label for="capital">수도권</label>
      <input
        v-model="checkedRadio"
        type="radio"
        value="비수도권"
        id="non-capital"
      />
      <label for="non-capital">비수도권</label>
    </div>
    <div class="valueBox">checked radio: {{ checkedRadio }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selected = ref("1");
const checked = ref([]);
const checkedRadio = ref("");
</script>

<style lang="scss" scoped>
.container {
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.valueBox {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

[type="checkbox"],
[type="radio"] {
  display: block;
  appearance: none;
  border: max(2px, 0.1em) solid gray;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
[type="checkbox"]:checked,
[type="radio"]:checked {
  border: 0.4em solid tomato;
}
</style>
