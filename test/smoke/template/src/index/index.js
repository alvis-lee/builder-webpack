import { helloworld } from './helloworld';
import '../../common';
import './index.less';

document.write(helloworld());

if (module.hot) {
  module.hot.accept('./helloworld.js',function(){
    console.log('Accepting the updated printMethod');
    document.write(helloworld());
  })
}
