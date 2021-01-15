<!--
 * @Author: MoZhuangRu
 * @Date: 2021-01-14 12:54:39
 * @LastEditors: MoZhuangRu
 * @LastEditTime: 2021-01-15 17:57:43
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
          <el-input v-model="sumForm.onethree" class="input" style="width:100px"></el-input>
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
            <el-radio :label="1223">12-23</el-radio>
            <el-radio :label="1224">12-24</el-radio>
            <el-radio :label="2324">23-24</el-radio>
            <el-radio :label="122324">12-23-24</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="三组：">
          <el-radio-group v-model="threeRadio">
            <el-radio :label="23">23</el-radio>
            <el-radio :label="34">34</el-radio>
            <el-radio :label="1323">13-23</el-radio>
            <el-radio :label="1334">13-34</el-radio>
            <el-radio :label="2334">23-34</el-radio>
            <el-radio :label="132334">13-23-34</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="四组：">
          <el-radio-group v-model="fourRadio">
            <el-radio :label="1424">14-24</el-radio>
            <el-radio :label="1434">14-34</el-radio>
            <el-radio :label="2434">24-34</el-radio>
            <el-radio :label="142434">14-24-34</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <el-form :inline="true">
        <el-form-item label="1：">
          <el-input v-model="filterForm.one" class="input" style="width:100px"></el-input>
        </el-form-item>
        <el-form-item label="2：">
          <el-input v-model="filterForm.two" class="input" style="width:100px"></el-input>
         </el-form-item>
        <el-form-item label="3：">
          <el-input v-model="filterForm.three" class="input" style="width:100px"></el-input>
        </el-form-item>
        <el-form-item label="4：">
          <el-input v-model="filterForm.four" class="input" style="width:100px"></el-input>
        </el-form-item>
      </el-form>
      <div style="margin: 20px">
        <el-button @click="onSearch" type="primary">查询</el-button>
      </div>
      <div style="margin: 20px">
        <!-- <el-button @click="onFilter" type="primary">过滤</el-button> -->
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
      filterData: [],
      unThreeData: [],
      oneRadio: '',
      twoRadio: '',
      threeRadio: '',
      fourRadio: '',
      sumForm: {
        onetwo: '013789',
        onefour: '013467',
        twofour: '12358'
      },
      filterForm: {
        one: '79'
      },
      oneTwoGroup: null,
      oneFourGroup: null,
      twoFourGroup: null
    }
  },
  methods: {
    onSearch () {
      if(this.oneRadio === 1214){
        this.oneTwoGroup = this.getSumGroup(this.sumForm.onetwo)
        this.oneFourGroup = this.getSumGroup(this.sumForm.onefour)
        // this.getSort(this.oneTwoGroup,this.oneFourGroup)
        if(this.fourRadio === 1424) {
          this.twoFourGroup = this.getSumGroup(this.sumForm.twofour)
          this.getSort(this.oneTwoGroup,this.oneFourGroup)
          let data = this.onTwoFourFilter(this.twoFourGroup,this.unThreeData)
          console.log(data);
          if(this.threeRadio === 132334) {

          }
          if(this.threeRadio === 1334) {

          }
          if(this.threeRadio === 1323) {

          }
          if(this.threeRadio === 23) {

          }
          if(this.threeRadio === 34) {

          }
          // this.onFilter(data)
        }
      }
    },
    getSort(onedata,twodata){
      let onetype = []
      let twotype = []
      onedata.forEach(item =>{
        let _item = [...item]
        onetype = onetype.concat(this.getGourp(_item[0],_item[1],twodata))
        twotype = twotype.concat(this.getGourp(_item[1],_item[0],twodata))
      })
      this.unThreeData = [...onetype,...twotype]
    },
    onTwoFourFilter(group,data){
      let filter = []
      data.forEach(item =>{
        let _item = [...item]
        group.forEach(num =>{
          let _num = [...num]
          if(((_item[1] === _num[0]) && (_item[3] === _num[1])) || ((_item[1] === _num[1]) && (_item[3] === _num[0]))) {
            filter.push(item)
          }
        })
      })
      return filter
    },
    getGourp(one,two,data){
      let group = []
      data.forEach(val =>{
        let _val = [...val]
        if(_val.includes(one)){
          if(one === _val[0]){
            group.push(`${one}${two}*${_val[1]}`)
          } else {
            group.push(`${one}${two}*${_val[0]}`)

          }
        }
      })
      return group
    },
    getSumGroup (num) {
      let numArr = [...num]
      let group = []
      numArr.forEach(item =>{
        switch(item){
          case '0':
            group = group.concat(['00','19','28','37','46','55'])
            break;
          case '1':
            group = group.concat(['01','29','38','47','56'])
            break;
          case '2':
            group = group.concat(['02','11','39','48','57','66'])
            break;
          case '3':
            group = group.concat(['03','12','49','58','67'])
            break;
          case '4':
            group = group.concat(['04','13','22','59','68','77'])
            break;
          case '5':
            group = group.concat(['05','14','23','69','78'])
            break;
          case '6':
            group = group.concat(['06','15','24','33','79','88'])
            break;
          case '7':
            group = group.concat(['07','16','25','34','89'])
            break;
          case '8':
            group = group.concat(['08','17','26','35','44','99'])
            break;
          case '9':
            group = group.concat(['09','18','27','36','45'])
            break;
        }
      })
      return group
    },
    onFilter (data) {
      let _one = [...this.filterForm.one]
      data.forEach(item =>{
        _one.forEach(num =>{
          if([...item].includes(num)) {
            this.filterData.push(item)
          }
        })
      })
      console.log(this.filterData);
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
