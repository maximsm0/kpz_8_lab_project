import '../../styles/ConfirmModal.css';

interface ConfirmModalProps {
	message: string;
	onConfirm: () => void;
	onCancel: () => void;
	isOpen: boolean;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ message, onConfirm, onCancel, isOpen }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-window">
				<p>{message}</p>
				<div className="modal-buttons">
					<button className="btn btn-danger" onClick={onConfirm}>Confirm</button>
					<button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmModal;
