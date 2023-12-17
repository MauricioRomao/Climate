import { useState } from 'react'
import './App.css'
import Container from './components/Container'



export default function App() {

    const [city, setCity] = useState()
    const [prevision, setPrevision] = useState(null)

    const handleChange = (e) => {

        setCity(e.target.value)

    }
    const handleSearch = () => {

        fetch(`http://api.weatherapi.com/v1/current.json?key=c7abd484b7fd4421b1712954231612&q=${city}&lang=pt`)
            .then((response) => {
                if (response.status == 200) {
                    return response.json()
                }
            }).then((data) => {
                setPrevision(data)
            })
    }
    return (
        <div>

            <Container />
            <main className="main">
                <header className="header">
                    <div className='header_name'>
                        <a href="#" className='text-white'>Maurício Romão</a>
                    </div>
                    <div className="Social_icones">
                        <a href="https://github.com/MauricioRomao" target="_blank"><i class="bx bxl-github"></i></a>
                        <a href="https://github.com/MauricioRomao" target="_blank"><i class="bx bxl-gmail"></i></a>
                    </div>
                </header>

                <section className='section'>
                    <p className='text-white'>
                        Veja a previsão do tempo na sua Cidade
                    </p>
                    <div className="all_magic">
                        <input type="text"
                            placeholder='Digite o Nome da sua Cidade'
                            className='form-control'
                            onChange={handleChange}
                            value={city}

                        />
                        <button className='btn btn-primary ' onClick={handleSearch}>
                            Pesquisar
                        </button>
                        
                    </div>
                  {
                        prevision ? (
                            <div className="all_previsions">

                            <div>
                                <img src={prevision.current.condition.icon} alt="" />
                                <p className='lead '>{prevision.current.temp_c + "º"}</p>
                                <h2 className='lead '>{prevision.current.condition.text}</h2>
                            </div>
                            </div>
                        ) : null
                    }
                </section>  
            </main>

        </div>
    )

}

