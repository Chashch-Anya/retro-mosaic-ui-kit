import { ThemeProvider } from './styles';
import { Button } from './components/Button';

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px', display: 'flex', gap: '10px', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h1>Mosaic UI Kit</h1>
        
        <Button variant="primary" size="small">
          Маленькая кнопка
        </Button>
        
        <Button variant="primary" size="medium">
          Средняя кнопка
        </Button>
        
        <Button variant="primary" size="large">
          Большая кнопка
        </Button>
        
        <Button variant="secondary">
          Вторичная кнопка
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;