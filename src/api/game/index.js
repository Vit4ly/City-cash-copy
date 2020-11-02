import $axios from '../index';

export async function getGame () {
  const { data } = await $axios.get('site/game/');
  return data;
}
