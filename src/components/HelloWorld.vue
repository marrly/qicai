<!--
 * @Author: MoZhuangRu
 * @Date: 2021-01-14 12:54:39
 * @LastEditors: MoZhuangRu
 * @LastEditTime: 2021-01-14 16:56:44
 * @Description:
 -->
<template>
  <div class="content">
    <h2>数据分析</h2>
    <div>
      <el-form :inline="true">
        <el-form-item label="1-2：">
          <el-input v-model="sumForm.onetwo" class="input" style="width:100px"></el-input>
        </el-form-item>
        <el-form-item label="1-3：">
          <el-input v-model="sumForm.onetwo" class="input" style="width:100px"></el-input>
         </el-form-item>
        <el-form-item label="1-4：">
          <el-input v-model="sumForm.onefour" class="input" style="width:100px"></el-input>
        </el-form-item>
        <el-form-item label="2-3：">
          <el-input v-model="sumForm.twothree" class="input" style="width:100px"></el-input>
        </el-form-item>
        <el-form-item label="2-4：">
          <el-input v-model="sumForm.twofour" class="input" style="width:100px"></el-input>
        </el-form-item>
        <el-form-item label="3-4：">
          <el-input v-model="sumForm.threefour" class="input" style="width:100px"></el-input>
        </el-form-item>
      </el-form>
      <el-form label-width="100px" style="width: 500px;margin:0 auto">
        <el-form-item label="一组：">
          <el-radio-group v-model="oneRadio">
            <el-radio :label="1213">12-13</el-radio>
            <el-radio :label="1214">12-14</el-radio>
            <el-radio :label="1314">13-14</el-radio>
            <el-radio :label="121314">12-13-14</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="二组：">
          <el-radio-group v-model="twoRadio">
            <el-radio :label="1213">12-23</el-radio>
            <el-radio :label="1214">12-24</el-radio>
            <el-radio :label="1314">23-24</el-radio>
            <el-radio :label="121314">12-23-24</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="三组：">
          <el-radio-group v-model="threeRadio">
            <el-radio :label="1213">13-23</el-radio>
            <el-radio :label="1214">13-34</el-radio>
            <el-radio :label="1314">23-34</el-radio>
            <el-radio :label="121314">13-23-34</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="四组：">
          <el-radio-group v-model="fourRadio">
            <el-radio :label="1213">14-24</el-radio>
            <el-radio :label="1214">14-34</el-radio>
            <el-radio :label="1314">24-34</el-radio>
            <el-radio :label="121314">14-24-34</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div style="margin: 20px">
        <el-button @click="onSearch" type="primary">查询</el-button>
      </div>
      <el-form :inline="true">
        <el-form-item label="1：">
          <el-input v-model="comfirmForm.one" class="input" style="width:100px"></el-input>
        </el-form-item>
        <el-form-item label="2：">
          <el-input v-model="comfirmForm.two" class="input" style="width:100px"></el-input>
         </el-form-item>
        <el-form-item label="3：">
          <el-input v-model="comfirmForm.three" class="input" style="width:100px"></el-input>
        </el-form-item>
        <el-form-item label="4：">
          <el-input v-model="comfirmForm.four" class="input" style="width:100px"></el-input>
        </el-form-item>
      </el-form>
      <div style="margin: 20px">
        <el-button @click="onFilter" type="primary">过滤</el-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      oneRadio: '',
      twoRadio: '',
      threeRadio: '',
      fourRadio: '',
      sumForm: {},
      comfirmForm: {}
    }
  },
  methods: {
    onSearch () {
      console.log(this.oneRadio);

    },
    onFilter () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
@deep ~'>>>';
  .input .el-input .el-input__inner{
    width: 100px !important;
  }
</style>
