export class InvalidCredentialsErrors extends Error{
  constructor (){
    super('Credenciais inválidas')
    this.name = 'InvalidCredentialsError'
  }
}
