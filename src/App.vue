<template>
  <div class="upload">
    <div class="main">
      <div class="avatar">
        <pic-clip
          :dataUrlType="option.dataUrlType"
          :accept="option.accept"
          :autoClip="option.autoClip"
          :autoClipWidth="option.autoClipWidth"
          :autoClipHeight="option.autoClipHeight"
          :fixed="option.fixed"
          :outputSize="option.outputSize"
          :theme="option.theme"
          @finish="finish"
        >上传头像</pic-clip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      option: {
        accept: 'image/png, image/jpeg, image/jpg, image/gif',
        dataUrlType: 'blob', // 数据类型，可选值： blob base64
        outputSize: 0.7,
        autoClip: true,
        autoClipWidth: 300,
        autoClipHeight: 300,
        canMoveBox: false,
        fixed: false,
        fixedNumber: [1, 1],
        theme: 'rect'
      }
    }
  },
  methods: {
    finish (filename, url) {
      console.log(filename, url)
      // console.log(this.dataURLtoFile(url, filename))
      // console.log(this.dataBlobtoFile(url, filename))
    },
    //将base64转换为文件
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    dataBlobtoFile(dataurl, filename) {
      let files = new window.File(
        [dataurl],
        filename,
        { type: `image/${filename.split('.')[1]}` }
      );
      return files
    }
  }
}
</script>

<style lang="css">
  i {
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: normal;
  list-style: none;
  font-style: normal;
  font-size: 14px;
  text-decoration: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}
.upload .main {
  margin: 20px;
  max-width: 40%;
  height: 400px;
}
.avatar {
  cursor: pointer;
  width: 160px;
  height: 160px;
}
</style>
