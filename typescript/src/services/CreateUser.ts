/**
 * Para criar: name, email, password
 */

 /**
  * Pra fazer desestruturação e definir tipagens melhor, é necessário o uso de interface;
  * 
  * Interface nesse caso é como que podemos definir os tipos de um conjunto de informações
  * 
  * Para definir o formato de um novo objeto, é necessário criar outra interface
  */

  interface techObject{
      title: string,
      experience: number,
  }

  interface createUserData{
      name?: string;
      email: string;
      password: string
      techs: Array<string | techObject>

  }

export default function createUser({name='', email, password, techs}: createUserData){
    const user = {
        name,
        email,
        password,
        techs,
    }

    return user;
}