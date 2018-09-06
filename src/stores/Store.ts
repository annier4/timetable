import { observable, action } from 'mobx';

class Store{

    @observable user: any = null;
    @observable proyects: any = [];
    @observable tasks: any = [];
    

    @action setUser(username: string, password: string){
        this.user = {
            name: username,
            password: password
        }
    }

    @action checkUser(username: string, password: string){
        Object.keys(this.user).forEach(function(key,index) {
            console.log(key, ); 
          });
    }

    @action setProyect(idProyect: number, proyectname: string){
        var proyect = {id: idProyect,name: proyectname};
        this.proyects.push(proyect);
    }

    @action setTask(idProy: number, taskname: string, dateS: string, dateE: string){
        var task = {idProyect: idProy, name: taskname, dateStart: dateS, dateEnd: dateE }
        this.tasks.push(task);
    }
}

export const store = new Store();