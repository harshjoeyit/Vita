import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axiosInstance from '../../axios';
import Header from '../Header';
import ReportList from './ReportListVidCom';
import reportStyle from '../css/reports.module.css';
import formStyles from '../css/forms.module.css';

function CommentReportAction() {
	const { id } = useParams();
	const history = useHistory();

	const handleAction = (action) => {
		const conf = window.confirm(`Are you sure to ${action} this?`);
		if (conf) {
			const body = {
				comment_id: id,
				action: action,
			};

			axiosInstance
				.post(`video/reported-comment/final/`, body)
				.then((res) => {
					history.push('/admin');
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<>
			<Header />
			<div style={{ height: '60px' }}></div>
			<div className={reportStyle.reportBox}>
				<div className={reportStyle.reportListBox}>
					<h2>Comment Report List</h2>
					<ReportList type='comment' id={id} />
					<div className={reportStyle.buttonBox}>
						<button
							className={formStyles.smallSubmitBtn}
							onClick={() => handleAction('approve')}
						>
							Approve
						</button>
						<button
							className={formStyles.smallDangerBtn}
							onClick={() => handleAction('decline')}
						>
							Decline
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default CommentReportAction;
