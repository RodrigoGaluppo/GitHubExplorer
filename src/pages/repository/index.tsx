import React,{useEffect,useState} from "react"
import { useRouteMatch,Link } from "react-router-dom"
import  {Header,RepositoryInfo,Issues} from "./styles"
import Logo from "../../assets/logo.svg"
import { FiChevronLeft } from "react-icons/fi"
import api from "../../services/api"

interface Repository{
    full_name:string,
    stargazers_count:number
    forks_count:number
    open_issues_count:number
    owner:{
        login:string
        avatar_url:string
    }
    description:string
}
interface Issue{
    id:number
    title:string
    html_url:string
    user:{
        login:string
    }
}
interface Info{
    repository:string
}

const Repository:React.FC = () => {
    const [repo,setRepository] = useState<Repository | null>(null)
    const [issues,setIssues] = useState<Issue[]>([])
    const { params } = useRouteMatch<Info>()

    useEffect(()=>{  
        api.get(`${params.repository}`).then((res)=>{
            setRepository(res.data)
        })
        api.get(`${params.repository}/issues`).then((res)=>{
            setIssues(res.data)
        })
        
    },[params.repository])

    return (
        <>
            <Header>
                <img src={Logo} alt=""/>
                <Link to="/" >
                    <FiChevronLeft size={20}></FiChevronLeft>
                    voltar
                </Link>
            </Header>

            {!!repo && (
                    <RepositoryInfo>
                        <header>
                            <img src={repo.owner.avatar_url} alt={repo.owner.login}/>
                            <div>
                                <strong> {repo.full_name} </strong>
                                <p> {repo.description} </p>
                            </div>
                        </header>
                        <ul>
                            <li>
                                <strong>{repo.stargazers_count}</strong>
                                <span>Stars</span>
                            </li>
                            <li>
                                <strong>{repo.forks_count}</strong>
                                <span>Forks</span>
                            </li>
                            <li>
                                <strong>{repo.open_issues_count}</strong>
                                <span>Issues</span>
                            </li>
                        </ul>
                    </RepositoryInfo>
                )}
           
            <Issues>
                    {issues.map((issue)=>(
                        <Link key={issue.id}  to={issue.html_url}>
                            <div>
                                <strong> {issue.title} </strong>
                                <p> {issue.user.login} </p>
                            </div>
                        </Link>
                    ))}
            </Issues>
        </>
    )
}

export default Repository