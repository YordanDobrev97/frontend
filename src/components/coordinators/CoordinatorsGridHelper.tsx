import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import ShareIcon from '@mui/icons-material/Share'
import { NextRouter } from 'next/router'
import React from 'react'
type Props = {
  setCarId: (id: string) => void
  carId: string
  openModal: () => void
  router: NextRouter
  route: string
  handleOpen: () => void
  setId: (id: string) => void
  idToSet: string
}

export const ControlIcons: React.FC<Props> = ({
  setCarId,
  carId,
  openModal,
  handleOpen,
  setId,
  idToSet,
}) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      {
        <ImportExportIcon
          sx={{ cursor: 'pointer' }}
          color="primary"
          onClick={() => {
            setCarId(carId)
            openModal()
          }}
        />
      }
      {
        <ShareIcon
          sx={{ cursor: 'pointer' }}
          color="primary"
          onClick={() => {
            setCarId(carId)
            openModal()
          }}
        />
      }
      {
        <DeleteIcon
          sx={{ cursor: 'pointer', opacity: 0.9 }}
          color="primary"
          onClick={() => {
            handleOpen()
            setId(idToSet)
          }}
        />
      }
    </div>
  )
}

const renderCell = (cellValues: GridRenderCellParams): React.ReactNode => {
  const style =
    cellValues.field === 'status' && cellValues.value === 'verified'
      ? { color: 'green' }
      : cellValues.field === 'status' && cellValues.value === 'verification_failed'
      ? { color: 'red' }
      : cellValues.field === 'status' && cellValues.value === 'new'
      ? { color: 'blue' }
      : cellValues.field === 'status' && cellValues.value === 'errored'
      ? { color: 'red' }
      : cellValues.field === 'status' && cellValues.value === 'validated'
      ? { color: 'green' }
      : { color: '' }

  return <div style={style}>{cellValues.value}</div>
}

export const commonProps: Partial<GridColDef> = {
  align: 'left',
  width: 150,
  headerAlign: 'left',
  renderCell,
}
