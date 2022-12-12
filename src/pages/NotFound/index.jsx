import './styles.scss';
import Logo from '../../assets/img/logo.svg';
import { useNavigate } from 'react-router-dom';
export function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="logoContainer">
          <img src={Logo} alt="" width={'180px'} />
        </div>
        <div className="messageContainer">
          <h1>404</h1>
          <p>Pagina não encontrada</p>
        </div>
        <div className="buttonContainer">
          <button onClick={()=>{
            navigate('/');
          }}>Voltar para a página inicial</button>
        </div>
      </div>
    </>
  );
}
