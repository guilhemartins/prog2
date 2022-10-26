const baseURL = "https://127.0.0.1:5500"

/*
* loginFirebase
* Realiza a autenticação do usuário no Firebase
@param {string} email - email do usuario
@param {string} senha - senha do usuario
@return {object} - o Objeto com o usuario logado
*/

function loginFirebase(email, senha){
    firebase
    .auth()
    .signInWithEmailAndPassword(email, senha)
    .then(result => {
        alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
        window.location.href = `${baseURL}/home.html`
    })
    .catch(error => {
        let mensagemErro = ''
        switch(error.code){
            case 'aluth/invalid-email':
            mensagemErro = 'O e-mail informado é invalido!'
            break;
            case 'auth/email-already-exists':
            mensagemErro = 'O e-mail informado já está sendo utilizado!'
            break;
            default:
            mensagemErro = error.message
        }
        alert(`Erro ao efetuar o login: ${error.code}`)
    })
}
/**
 * novoUsuario
 * Cria um novo usuário no Firebase
 * @param {string}email - email do usuário
 * @param {string}senha - senha do usuário
 * @return {object} - O usuário criado
 */
function novoUsuario(email, senha){
    firabase.auth().createUserWithEmailAndPassword(email, senha).then((result) => {
        alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
        window.location.href= `${baseURL}/home.html`
    })
    .catch(error => {
        alert(`Não foi possível cadastrar o usuário. Erro: $(error.message)`)
    })
}
/**
 * verificaLogado
 * Verifica se o usuário está logado no sistema
 * @return {null}
 */
function verificalogado(){
    firebase.auth().onAuthStateChanged(user => {
        if(!user){
            console.log('Acesso inválido. Redirecionando...')
            window.location.href = baseURL
        }
    })
}