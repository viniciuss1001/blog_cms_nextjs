import { Loader2 } from 'lucide-react'
import React from 'react'

const LoaderComponent = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<Loader2 className='animate-spin' />
		</div>
	)
}

export default LoaderComponent