 
import { Flex, Typography, Menu} from 'antd';
import './App.css';  

function App() {

  const {Text} = Typography;
  const textColorWhite = {color:'white'} ;
  return (
    <div className="App">
      <Flex justify='center' gap={65} style={{padding:20, backgroundColor:'#826300',color:'white'}}>
          <Text  style={textColorWhite}>MEGA SALE</Text> 
          <Text style={textColorWhite}>Take 10% OFF</Text>
      </Flex>
      <Menu className='Menu'  mode='horizontal' 
        items={[
          {label:'PRODUCTS', key:"products"},
          {label:'SHOP', key:"shop"},
          {label:'WEDDINGS', key:"weddings"},
          {label:'SERVICES', key:"services"},
          {label:'CONTACT', key:"contact"},
          ]}
      />
 
    </div>
  );
}

export default App;
