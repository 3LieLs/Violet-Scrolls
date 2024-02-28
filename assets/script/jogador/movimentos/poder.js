/*-----*/
function botaoPoderClick() {
   if (poderUtilizado == false) {
      poderUso();
   }
   if (poderUtilizado == true) {
      alert(`Você já utilizou seu poder nesta batalha`);
   }

   poderUtilizado = true;
}
/*-----*/