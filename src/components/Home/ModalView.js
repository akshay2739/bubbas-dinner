import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

class ModalView extends Component {
	render() {
		return (
			<div>
				<Modal
					show={this.props.show}
					onHide={() => this.props.onHide()}
					size='lg'
					aria-labelledby='contained-modal-title-vcenter'
					centered
					className='shadow-lg p-3 mb-5  bg-red rounded'
				>
					<Modal.Header closeButton className='bg-dark'>
						<Modal.Title id='example-custom-modal-styling-title'>
							Alert Header
						</Modal.Title>
					</Modal.Header>

					<Modal.Body className='bg-dark'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
							ipsam, laborum sunt debitis omnis dolorem explicabo aliquid eum
							soluta expedita perferendis ducimus facilis esse, culpa voluptatum
							qui, dolore veritatis reiciendis.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
							ipsam, laborum sunt debitis omnis dolorem explicabo aliquid eum
							soluta expedita perferendis ducimus facilis esse, culpa voluptatum
							qui, dolore veritatis reiciendis.
						</p>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
							ipsam, laborum sunt debitis omnis dolorem explicabo aliquid eum
							soluta expedita perferendis ducimus facilis esse, culpa voluptatum
							qui, dolore veritatis reiciendis.
						</p>
					</Modal.Body>
				</Modal>
			</div>
		)
	}
}

export default ModalView
