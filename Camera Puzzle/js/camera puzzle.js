// 전역 변수 추가
let trails = []; 

// render 함수 내부 (손가락 그리기 부분)
if (stateData.cursorPos) {
  // 트레일 저장
  trails.push({ x: stateData.cursorPos.x, y: stateData.cursorPos.y, life: 1.0 });
}

// 트레일 그리기 및 업데이트
ctx.save();
for (let i = trails.length - 1; i >= 0; i--) {
  let p = trails[i];
  p.life -= 0.1; // 수명 감소
  if (p.life <= 0) {
    trails.splice(i, 1);
    continue;
  }
  
  ctx.globalAlpha = p.life;
  ctx.fillStyle = '#00ff9d';
  ctx.beginPath();
  ctx.arc(p.x, p.y, 10 * p.life, 0, Math.PI * 2); // 점점 작아짐
  ctx.fill();
}
ctx.restore();