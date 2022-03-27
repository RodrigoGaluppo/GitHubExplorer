import React,{ useState,FormEvent,useEffect } from "react"
import { FiChevronRight } from "react-icons/fi"
import Logo from "../../assets/logo.svg"
import api from "../../services/api"
import {Title,Form,Repositories,Error }  from "./styles"
import { Link } from "react-router-dom"

interface Repository{
    full_name:string
    owner:{
        login:string
        avatar_url:string
    }
    description:string
}

const Dashboard:React.FC = () => {

    const RepoArr = ()=>{
        let storageRepository = localStorage.getItem("@githubExplore:repositories")

        let repos = !!storageRepository ? JSON.parse(storageRepository) : []

        return repos
    }

    const [newRepo,setnewRepo] = useState("")
    const [repositories,setRepositories] = useState<Repository[]>(RepoArr)
    const [inputError,setInputErrror] = useState("")
    
    useEffect(()=>{
        localStorage.setItem("@githubExplore:repositories",JSON.stringify(repositories))
    },[repositories])


    async function handleAddRepository(e:FormEvent<HTMLFormElement>):Promise<void>{
        e.preventDefault()
        if(!newRepo){
          setInputErrror("digite o autor/nome_do_repositorio") 
          return 
        }
        try{
            const response = await api.get<Repository>(`${newRepo}`)
            const repository = response.data

            setRepositories([...repositories,repository])
            setnewRepo("")
            setInputErrror("")
        }catch(err){

            setInputErrror("erro na busca pelo repositorio")
        }
    }

    return (
        <>
            <img src={Logo} alt=""/>
            <Title>Explore repositorios no github</Title>
            <Form hasError={!!inputError} onSubmit={handleAddRepository} >
                <input 
                type="text"  placeholder="digite o nome do repositorio" 
                value={newRepo} onChange={e => setnewRepo(e.target.value)} 
                />
                <button type="submit">Pesquisar</button>
            </Form>
            
            { inputError && <Error> {inputError} </Error>}
            
            <Repositories>
                {repositories.map((repository)=>(
                    <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
                        <img src= {repository.owner.avatar_url} alt={repository.owner.login} />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                            <FiChevronRight size={20} />
                        </div>
                    </Link>
                ))}
            </Repositories>
        </>
    )
}

export default Dashboard