import { useState } from 'react'
import './App.css'
import {Container} from './assets/components/Container'


export default function App() {
    /*
        const [city, setCity] = useState(" teste")
    
        const handleChange = (e) => {
            setCity (e.target.value)
        }
        const handleSearch = () =>{
            fetch(`http://api.weatherapi.com/v1/current.json?key=c7abd484b7fd4421b1712954231612&q=${city}&lang=pt`)
        }
        */
    /*
       return (
           <div>
               <nav className='navbar bg-dark navbar-expend-md'>
                   <a href="#" className='text-white navbar-brand'>
                       Maurício Romão
                   </a>
               </nav>
   
               <main className='container mt-3 '>
                   <div className='jumbotron'>
                       <p className='text-center '>
   
                           Verifique a previsão do tempo na sua Cidade
                       </p>
                       <h5 className='text-center mt-5 mb-5 lead'>Digite o nome da sua cidade</h5>
   
   
                       <div>
                           <input type="text"
                               onChange={handleChange}
                               className='text-center form-control mt-8'
                               value={city}
                           />
                       </div>
                       <button className='btn-primary btn mt-3'>
                           Pesquisar
   
                       </button>
                   </div>
   
   
   
               </main>
           </div>
       )*/
       return(
        <div>
            <Container />
<p>ola mudo</p>
        </div>
       )
}

