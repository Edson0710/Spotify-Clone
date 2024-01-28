// Aqui podria ir una base de datos
import { allPlaylists, songs as allSongs, songs } from "@/lib/data";

export async function GET({params, request}){

  // Obtener parametros de la url
  const { url } = request
  const urlObject = new URL(url)
  const id = urlObject.searchParams.get('id')

  const playlist = allPlaylists.find((playlist) => playlist.id == id)
  const songs = allSongs.filter(song => song.albumId == playlist?.albumId)

  return new Response(JSON.stringify({playlist, songs}, {
    headers: {"content-type": "application/json"},
  }))

}