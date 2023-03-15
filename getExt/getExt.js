function getExtension(filename) {
    return filename.substring(filename.lastIndexOf('.') + 1);
  }
  
  console.log(getExtension('hello-world.txt'));
  console.log(getExtension('awesome.component.ts'));
  console.log(getExtension('readme.md'));
  console.log(getExtension('user.jsx'));