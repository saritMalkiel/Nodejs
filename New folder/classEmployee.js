class classEmployee {
    constructor(name,lastname,id,tel,adress,mail){
        this._firstName=firstName;
        this._lastName=lastName;
        this._id=id;
        this._tel=tel;
        this._adress=adress;
        this._mail=mail;
    }
    get mail(){
        return this._mail
    }
    set mail(mail){
        this._mail=mail
    }
    get firstName(){
        return this._firstName
    }
    set firstName(firstName){
        this._firstName=firstName
    }
    get lastName(){
        return this._lastName
    }
    set lastName(lastName){
        this._lastName=lastName
    }
    get id(){
        return this._id
    }
    set id(id){
        this._id=id
    }
    get tel(){
        return this._tel
    }
    set tel(tel){
        this._tel=tel
    }
    get adress(){
        return this._adress
    }
    set adress(adress){
        this._adress=adress
    }
    getDietal(){
        return  'mail:'+this._mail+', firstName:'+this._firstName+', lastName:'+this._lastName+' ,adress:'+this._adress +' ,tel:'+this._tel+', id:'+this._id;
    }
    
    

}
///myuser=new user("sarit","malkiel","207458118","0548448694","hlochamia","saritt@")
///console.log(myuser.getDietal())
module.exports=classEmployee;