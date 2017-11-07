// const host = 'https://services.giaohangtietkiem.vn';
import $ from 'jquery';



const getFee = () => {
  $.ajax({
    url: 'https://services.giaohangtietkiem.vn/services/shipment/fee?address=P.503%20t%C3%B2a%20nh%C3%A0%20Auu%20Vi%E1%BB%87t,%20s%E1%BB%91%201%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D&province=H%C3%A0%20n%E1%BB%99i&district=Qu%E1%BA%ADn%20C%E1%BA%A7u%20Gi%E1%BA%A5y&pick_province=H%C3%A0%20N%E1%BB%99i&pick_district=Qu%E1%BA%ADn%20Hai%20B%C3%A0%20Tr%C6%B0ng&weight=1000&value=3000000',
    headers: {
      'Token': '802b7646Ee8215396FA3f92aBE4126189e8AeDbb',
      'Content-Type':'application/json'
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
      console.log('succes: '+data)
    }
  })
  // const myHeaders = new Headers({
  //   Accept: 'application/json',
  // });
  //
  // myHeaders.append('Token', '802b7646Ee8215396FA3f92aBE4126189e8AeDbb');
  //
  // const myInit = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   mode: 'cors',
  //   cache: 'default'
  // };
  // fetch('https://services.giaohangtietkiem.vn//services/shipment/fee?address=P.503%20t%C3%B2a%20nh%C3%A0%20Auu%20Vi%E1%BB%87t,%20s%E1%BB%91%201%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D&province=H%C3%A0%20n%E1%BB%99i&district=Qu%E1%BA%ADn%20C%E1%BA%A7u%20Gi%E1%BA%A5y&pick_province=H%C3%A0%20N%E1%BB%99i&pick_district=Qu%E1%BA%ADn%20Hai%20B%C3%A0%20Tr%C6%B0ng&weight=1000&value=3000000', myInit).then(response => {
  //   response.json().then(data => {
  //     console.log(data);
  //   })
  // })
};

export default {
  getFee,
};