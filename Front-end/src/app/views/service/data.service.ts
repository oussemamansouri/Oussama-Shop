import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
datau:any
data:any
  constructor(private http:HttpClient) { }


    getUsers(){ 
      return this.http.get('Http://localhost:3000/users')
    }
    getproduit(){ 
      return this.http.get('Http://localhost:3000/getAllproduit')
    }
    getorder(){ 
      return this.http.get('Http://localhost:3000/getAllorder')
    }
    deleteuser(id:any){ 
      return this.http.delete('Http://localhost:3000/user/'+id)
    }
    getoneuser(id:any){ 
      return this.http.get('Http://localhost:3000/user/'+id)
    }
    deleteorder(id:any){ 
      return this.http.delete('Http://localhost:3000/deleteorder/'+id)
    }
    deleteproduit(id:any){ 
      return this.http.delete('Http://localhost:3000/deleteproduit/'+id)
    }
    getoneorder(id:any){ 
      return this.http.get('Http://localhost:3000/getOneorder/'+id)
    }
    getoneproduit(id:any){ 
      return this.http.get('Http://localhost:3000/getOneproduit/'+id)
    }
   
    adduser(profile:any){ 
      return this.http.post('Http://localhost:3000/register',profile)
    }
    addproduit(p:any){ 
      return this.http.post('Http://localhost:3000/addproduit',p)
    }
    updateproduit(f:any,Id:any){ 
      return this.http.patch('Http://localhost:3000/updateproduit/'+Id,f)
    }
    addorder(p:any){ 
      return this.http.post('Http://localhost:3000/addorder',p)
      

      }
     /* updateorder(p:any,Id:any){
        return this.http.patch('Http://localhost:3000/updateorder/'+Id,p)
      }*/

    

  
}
