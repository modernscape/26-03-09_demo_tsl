import { Fn, time, vec3, storage, instanceIndex } from 'three/tsl';

export const computeFluidUpdate = Fn(({ particleBuffer, viscosity }) => {
  // storage の戻り値を明示的に扱うか、一旦 any で回避して TSL のメソッドを呼ぶ
  const p = storage(particleBuffer, 'vec3', instanceIndex);
  
  // time.sin() なども Node なので、TSL の演算子（add, mul）をチェーンします
  // もし p.add が never になるなら、(p as any).add(...) を試してください
  const verticalMovement = time.sin().mul(0.1); 
  
  // 座標更新ロジック
  // TSLの代入は .assign() を使います
  const newPos = p.add(vec3(0, verticalMovement, 0)).mul(viscosity);
  
  p.assign(newPos);
});