import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
} from "lucide-react";

export function AttendeeList() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-3'>
        <h1 className='text-2xl font-bold'>Participantes</h1>
        <div className='px-3 py-1.5 border border-white/10 rounded-lg w-72 flex items-center gap-3'>
          <Search className='text-emerald-300' size={16} />
          <input
            className='bg-transparent flex-1 outline-none p-0 border-0 text-sm'
            placeholder='Buscar participante...'
          />
        </div>
      </div>

      <div className='border border-white/10 rounded-lg'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-white/10'>
              <th style={{ width: 48 }} className='py-3 px-5 font-semibold text-sm text-left'>
                <input
                  className='size-4 bg-black/20 rounded border border-white/10'
                  type='checkbox'
                  name=''
                  id=''
                />
              </th>

              <th className='py-3 px-5 font-semibold text-sm text-left'>Código</th>

              <th className='py-3 px-5 font-semibold text-sm text-left'>Participante</th>

              <th className='py-3 px-5 font-semibold text-sm text-left'>Data de inscrição</th>

              <th className='py-3 px-5 font-semibold text-sm text-left'>Data do check-in</th>

              <th style={{ width: 64 }} className='py-3 px-5 font-semibold text-sm text-left'></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map(() => {
              return (
                <tr className='border-b border-white/10'>
                  <td className='py-3 px-5 text-sm text-zinc-300'>
                    <input
                      className='size-4 bg-black/20 rounded border border-white/10'
                      type='checkbox'
                      name=''
                      id=''
                    />
                  </td>

                  <td className='py-3 px-5 text-sm text-zinc-300'>01199</td>

                  <td className='py-3 px-5 text-sm text-zinc-300'>
                    <div className='flex flex-col gap-1'>
                      <span className='font-bold text-white'>Lucas Mendes da Silva</span>
                      <span className='text-xs'>lucasms.540@gmail.com</span>
                    </div>
                  </td>

                  <td className='py-3 px-5 text-sm text-zinc-300'>7 dias atrás</td>

                  <td className='py-3 px-5 text-sm text-zinc-300'>5 dias atrás</td>

                  <td className='py-3 px-5 text-sm text-zinc-300'>
                    <button className='border border-white/10 p-1.5 rounded-md bg-black/20'>
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className=''>
              <td className='py-3 px-5 text-sm text-zinc-300' colSpan={3}>
                Mostrando 8 de 223 itens
              </td>
              <td className='py-3 px-5 text-sm text-zinc-300 text-right' colSpan={3}>
                <div className='inline-flex items-center gap-8'>
                  <span>Página 1 de 24</span>

                  <div className='flex gap-1.5'>
                    <button className='border border-white/10 p-1.5 rounded-md bg-white/10'>
                      <ChevronsLeft size={16} />
                    </button>

                    <button className='border border-white/10 p-1.5 rounded-md bg-white/10'>
                      <ChevronLeft size={16} />
                    </button>

                    <button className='border border-white/10 p-1.5 rounded-md bg-white/10'>
                      <ChevronRight size={16} />
                    </button>

                    <button className='border border-white/10 p-1.5 rounded-md bg-white/10'>
                      <ChevronsRight size={16} />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
