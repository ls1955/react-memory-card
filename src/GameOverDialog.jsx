import "./GameOverDialog.css"

function GameOverDialog() {
  const handleRefresh = () => location.reload();

  return (
    <div id="game-over-dialog">
      <h2>Congratulation, you have beat the game.</h2>
      <button onClick={handleRefresh}>One more round?</button>
    </div>
  );
}

export default GameOverDialog;
