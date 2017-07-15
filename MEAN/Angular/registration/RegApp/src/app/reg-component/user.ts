export class User {
constructor(
   public id: number = null,
   public fName: string = "",
   public lName: string = "",
   public email: string = "",
   public password: string = "",
   public street: string = "",
   public city: string = "",
   public state: string = "",
   public feeling: boolean = true,
   public created_at: Date = new Date(),
   public updated_at: Date = new Date()
 ){}
}
