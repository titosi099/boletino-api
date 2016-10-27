import app from './app';

const PORT = app.get('port');

app.listen(PORT, () => {
  console.log(`Boletino rodando na porta ${PORT}`);
});
