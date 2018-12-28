const Email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const Domain = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?/;
const InternetURL = /^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$/;
const PhoneNo = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/;
const Phone = /^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$/ // ("XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX)：
const IdCard = /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/
const IP = /\d+\.\d+\.\d+\.\d+/

export {
    Email,
    Domain,
    InternetURL,
    PhoneNo,
    Phone,
    IdCard,
    IP
}