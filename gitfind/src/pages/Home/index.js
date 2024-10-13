import './styles.css'
import { useState } from 'react'

// import { Header } from '../../components/Header' //sem Export Defaul {} é necessário
import imgbackground from '../../assets/imgbackground.png'
import ItemList from '../../components/ItemList'



function App() {

  const [user, setUser] = useState('DEV-HUEINI')
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()
    
    if(newUser.name){
      const { login, name, bio, avatar_url, html_url } = newUser
      setCurrentUser({ login, name, bio, avatar_url, html_url });
      
      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json()
      
      if(newRepos.length){
        setRepos(newRepos);
      }
    }
  }

  return (
    <div className="App">
      {/* <Header /> */}
        <div className="conteudo">
        
        <img className="imgbackground" src={imgbackground} alt="imgbackground" />
          
          <div className="info" >
          
          
          
            <div>
              
              <input 
                name="usuario" 
                value={user} 
                onChange={event => setUser(event.target.value)}
                placeholder="@username" 
              />
              
              <button onClick={handleGetData}>
                Buscar
              </button>
              
            </div>
            
            {currentUser?.name ? (
            

                <div className="perfil">
                  
                  <img 
                    src={currentUser.avatar_url}
                    className="profile"
                    alt="imagem de perfil"
                  />
                
                  <div>
                    <h3>{currentUser.name}</h3>
                    <span>@{currentUser.login}</span>
                    <p>{currentUser.bio}</p>
                  </div>
              
                </div>
                
            
            ) : null}
            
            {repos?.length ? (
              
                
                <div>
                  
                  <h4 className="repositorio">Repositórios</h4>
                  <hr />
                  {repos.map(repo => (
                    <ItemList 
                      key={repo.id}
                      title={repo.name} 
                      description={repo.description}
                      url={repo.html_url}
                    />
                  ))}
                  
                </div>
              
            ) : null}

          </div>
      </div>
    </div>
  );
}

export default App;
