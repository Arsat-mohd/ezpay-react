import React from 'react';
import Button from '../lib/Button';
import './Table.css';
import Card from "../lib/Card";

function Table({transactions, onViewDetails, onEdit, onCancel}) {

    const renderActions = (transaction) => (
        <td className="transaction-button-actions">
            <Button label="View" type="confirm" onClick={() => onViewDetails(transaction)} />
                    {(transaction.status === 'Initiated' || transaction.status === 'Processing') ?
                        <>
                        <Button label="Edit" type="confirm" onClick={() => onEdit(transaction)} />
                        <Button label="Cancel" type="cancel" onClick={() => onCancel(transaction)} />
                            </>
                        :
                        <>
                            <Button type="invisible"/>
                            <Button type="invisible"/>
                            </>
                    }
        </td>
    );

    return (
        <Card>
            {transactions.length > 0 ? (
                <table className="transactions-table">
                    <thead>
                    <tr>
                        <th>Transaction Date</th>
                        <th>Amount</th>
                        <th>Recipient</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.transactionId} className="transaction-row">
                            <td>{transaction.transactionDate}</td>
                            <td>${transaction.amount}</td>
                            <td>{transaction.recipientSender}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.status}</td>
                            {renderActions(transaction)}
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p className="no-transactions-message">
                    No transactions found for the selected filters.
                </p>
            )}
        </Card>
    );


}



export default Table;
