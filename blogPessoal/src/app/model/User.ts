import { Postagem } from './Postagem';
export class User{
  public id: number
  public nome: string
  public usuario: string
  public senha: number
  public foto: string
  public tipo: string
  public postagem: Postagem[]
}
