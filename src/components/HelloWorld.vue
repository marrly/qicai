<!--
 * @Author: MoZhuangRu
 * @Date: 2021-01-14 12:54:39
 * @LastEditors: MoZhuangRu
 * @LastEditTime: 2021-01-22 17:44:29
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
      <el-form label-width="100px" style="width: 700px;margin:0 auto">
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
            <el-radio :label="23">23</el-radio>
            <el-radio :label="24">24</el-radio>
            <el-radio :label="1223">12-23</el-radio>
            <el-radio :label="1224">12-24</el-radio>
            <el-radio :label="2324">23-24</el-radio>
            <el-radio :label="122324">12-23-24</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="三组：">
          <el-radio-group v-model="threeRadio">
            <el-radio :label="13">13</el-radio>
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
            <el-radio :label="34">34</el-radio>
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
      groupData: [],
      oneTwoFourDataOne: [],
      oneTwoFourDataTwo: [],
      oneTwoFourDataThree: [],
      oneTwoThreeDataThree: [],
      oneThreeFourDataTwo: [],
      oneThreeFourDataThree: [],
      classData: {},
      unFourData: [],
      unTwoData: [],
      filterData: [],
      unThreeData: [],
      oneRadio: '',
      twoRadio: '',
      threeRadio: '',
      fourRadio: '',
      sumForm: {
        onetwo: '1234780',
        onethree: '46790',
        onefour: '125678',
        twothree: '13589',
        twofour: '136890',
        threefour: '2345670'
      },
      filterForm: {
        one: '9057'
      },
      oneTwoGroup: null,
      oneFourGroup: null,
      twoFourGroup: null
    }
  },
  methods: {
    onSearch () {
      this.oneTwoGroup = this.getSumGroup(this.sumForm.onetwo)
      this.oneThreeGroup = this.getSumGroup(this.sumForm.onethree)
      this.oneFourGroup = this.getSumGroup(this.sumForm.onefour)
      this.twoThreeGroup = this.getSumGroup(this.sumForm.twothree)
      this.twoFourGroup = this.getSumGroup(this.sumForm.twofour)
      this.threeFourGroup = this.getSumGroup(this.sumForm.threefour)
      if(this.oneRadio === 1214){
        this.getUnThreeGroup(this.oneTwoGroup,this.oneFourGroup)
        if(this.threeRadio === 13) {
          this.oneTwoFourDataOne = this.onOneThreeFilter(this.oneThreeGroup,this.unThreeData)
          console.log(121413);
          // this.onFilter(oneThreeData)
        }
        if(this.threeRadio === 23) {
          this.oneTwoFourDataTwo = this.onTwoThreeFilter(this.twoThreeGroup,this.unThreeData)
          console.log(121423);

          // this.onFilter(twoThreeData)
        }
        if(this.threeRadio === 34) {
          this.oneTwoFourDataThree = this.onThreeFourFilter(this.threeFourGroup,this.unThreeData)
          console.log(121434);

          // this.onFilter(threeFourData)
        }
      }
      if(this.oneRadio === 1213){
        this.getUnFourGroup(this.oneTwoGroup,this.oneThreeGroup)
        if(this.fourRadio === 34) {
          this.oneTwoThreeDataThree = this.onUnFourFilter(this.threeFourGroup,this.unFourData)
          console.log(121334);

          // this.onFilter(threeFourData)
        }
      }
      if(this.oneRadio === 1314){
        this.getUnTwoGroup(this.oneThreeGroup,this.oneTwoGroup)
        if(this.twoRadio === 23){
          this.oneThreeFourDataTwo = this.onUnTwoThreeFilter(this.twoThreeGroup,this.unTwoData)
          console.log(131423);

          // this.onFilter(twoThreeData)
        }
        if(this.twoRadio === 24){
          this.oneThreeFourDataThree = this.onUnTwoFourFilter(this.twoFourGroup,this.unTwoData)
          console.log(131424);

          // this.onFilter(twoFourData)
        }
      }
      this.groupData = [...this.oneTwoFourDataOne,...this.oneTwoFourDataTwo,...this.oneTwoFourDataThree,...this.oneTwoThreeDataThree,...this.oneThreeFourDataTwo,...this.oneThreeFourDataThree]
      console.log('总：',this.groupData.length);
      this.groupData = Array.from(new Set(this.groupData))
      this.onFilter(this.groupData)
    },
    getUnThreeGroup(onetwo,onefour){
      let onetype = []
      let twotype = []
      onetwo.forEach(item =>{
        let _item = [...item]
        onetype = onetype.concat(this.getUnthree(_item[0],_item[1],onefour))
        twotype = twotype.concat(this.getUnthree(_item[1],_item[0],onefour))
      })
      this.unThreeData = [...onetype,...twotype]
    },
    getUnTwoGroup(onethree,onefour) {
      let onetype = []
      let twotype = []
      onethree.forEach(item =>{
        let _item = [...item]
        onetype = onetype.concat(this.getUntwo(_item[0],_item[1],onefour))
        twotype = twotype.concat(this.getUntwo(_item[1],_item[0],onefour))
      })
      this.unTwoData = [...onetype,...twotype]
    },
    getUntwo(one,three,onefour){
      let group = []
      onefour.forEach(val =>{
        let _val = [...val]
        if(_val.includes(one)){
          if(one === _val[0]){
            group.push(`${one}*${three}${_val[1]}`)
          } else {
            group.push(`${one}*${three}${_val[0]}`)

          }
        }
      })
      return group
    },
    getUnFourGroup(onetwo,onethree) {
      let onetype = []
      let twotype = []
      onetwo.forEach(item =>{
        let _item = [...item]
        onetype = onetype.concat(this.getUnfour(_item[0],_item[1],onethree))
        twotype = twotype.concat(this.getUnfour(_item[1],_item[0],onethree))
      })
      this.unFourData = [...onetype,...twotype]
    },
    getUnfour(one,two,onethree){
      let group = []
      onethree.forEach(val =>{
        let _val = [...val]
        if(_val.includes(one)){
          if(one === _val[0]){
            group.push(`${one}${two}${_val[1]}*`)
          } else {
            group.push(`${one}${two}${_val[0]}*`)

          }
        }
      })
      return group
    },
    getUnthree(one,two,onefour){
      let group = []
      onefour.forEach(val =>{
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
    // 13
    onOneThreeFilter(oneThree,data) {
      let filter = []
      data.forEach(item =>{
        let _item = [...item]
        oneThree.forEach(num =>{
          let _num = [...num]
          if(_item[0] === _num[0]){
            _item[2] = _num[1]
            filter.push(_item.join(''))
          }
          if(_item[0] === _num[1]){
            _item[2] = _num[0]
            filter.push(_item.join(''))
          }
        })
      })
      return Array.from(new Set(filter))
    },
    // 23
    onTwoThreeFilter(twothree,data){
      let filter = []
      data.forEach(item =>{
        let _item = [...item]
        twothree.forEach(num =>{
          let _num = [...num]
          if(_item[1] === _num[0]){
            _item[2] = _num[1]
            filter.push(_item.join(''))
          }
          if(_item[1] === _num[1]){
            _item[2] = _num[0]
            filter.push(_item.join(''))
          }
        })
      })
      return Array.from(new Set(filter))
    },
    // 34
    onThreeFourFilter(threefour,data){
      let filter = []
      data.forEach(item =>{
        let _item = [...item]
        threefour.forEach(num =>{
          let _num = [...num]
          if(_item[3] === _num[0]){
            _item[2] = _num[1]
            filter.push(_item.join(''))
          }
          if(_item[3] === _num[1]){
            _item[2] = _num[0]
            filter.push(_item.join(''))
          }
        })
      })
      return Array.from(new Set(filter))
    },
    onUnFourFilter(threefour,unfourData) {
      let filter = []
      unfourData.forEach(item =>{
        let _item = [...item]
        threefour.forEach(num =>{
          let _num = [...num]
          if(_item[2] === _num[0]){
            _item[3] = _num[1]
            filter.push(_item.join(''))
          }
          if(_item[2] === _num[1]){
            _item[3] = _num[0]
            filter.push(_item.join(''))
          }
        })
      })
      return Array.from(new Set(filter))
    },
    onUnTwoThreeFilter(twothree,untwoData) {
      let filter = []
      untwoData.forEach(item =>{
        let _item = [...item]
        twothree.forEach(num =>{
          let _num = [...num]
          if(_item[2] === _num[0]){
            _item[1] = _num[1]
            filter.push(_item.join(''))
          }
          if(_item[2] === _num[1]){
            _item[1] = _num[0]
            filter.push(_item.join(''))
          }
        })
      })
      return Array.from(new Set(filter))
    },
    onUnTwoFourFilter(twofour,untwoData){
      let filter = []
      untwoData.forEach(item =>{
        let _item = [...item]
        twofour.forEach(num =>{
          let _num = [...num]
          if(_item[3] === _num[0]){
            _item[1] = _num[1]
            filter.push(_item.join(''))
          }
          if(_item[3] === _num[1]){
            _item[1] = _num[0]
            filter.push(_item.join(''))
          }
        })
      })
      return Array.from(new Set(filter))
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
      this.filterData = []
      let _one = [...this.filterForm.one]
      data.forEach((item) =>{
        if(_one.find(val => [...item].includes(val))) {
          this.filterData.push(item)
        }
        // _one.forEach(num =>{
        //   if([...item].includes(num)) {
        //     this.filterData.push(item)
        //   }
        // })
      })
      console.log('过滤：',this.filterData.length);

      this.onClass(this.filterData)
    },
    onClass(data) {
      let one = []
      let two = []
      let three = []
      let four = []
      let number = ['0','1','2','3','4','5','6','7','8','9']
      data.map(item =>{
        let _item = [...item]
        if(_item[0] !== _item[1] && _item[0] !== _item[2] && _item[1] !== _item[2] && _item[2] !== _item[3] && _item[1] !== _item[3] && _item[0] !== _item[3]) {
          one.push(_item.join(''))
        }
        number.map(num =>{
          if(_item.filter(val => val === num).length === 2) {
            two.push(_item.join(''))
          }
          return num
        })
        number.map(num =>{
          if(_item.filter(val => val === num).length === 3) {
            three.push(_item.join(''))
          }
          return num
        })
        number.map(num =>{
          if(_item.filter(val => val === num).length === 4) {
            four.push(_item.join(''))
          }
          return num
        })
        return item
      })
      one = one.sort()
      two = two.sort()
      three = three.sort()
      four = four.sort()
      this.classData = {one,two,three,four}
      console.log('归类',this.classData);
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
