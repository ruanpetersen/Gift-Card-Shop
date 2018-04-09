import React, { Component } from 'react';
import './App.css';
import Modal from 'react-modal';
import ReactTooltip from 'react-tooltip';
import giftCard from './images/giftCard.png';
import {CSVLink} from 'react-csv';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showModalTwo: false,
      showModalThree: false,
      valueChange: '',
      quantityChange: ''
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModalTwo = this.handleOpenModalTwo.bind(this);
    this.handleCloseModalTwo = this.handleCloseModalTwo.bind(this);
    this.handleOpenModalThree = this.handleOpenModalThree.bind(this);
    this.handleCloseModalThree = this.handleCloseModalThree.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  headers = [
    {label: 'Date Created', key: 'date'},
    {label: 'Ref No.', key: 'refno'},
    {label: 'Balance', key: 'balance'},
    {label: 'Owner', key: 'owner'},
    {label: 'Uses', key: 'uses'},
    {label: 'Status', key: 'status'}
  ];
   
  data = [
    {date: '2018-04-05', refno: 'XAB56H8', balance: '500', owner: 'Jill Robinson', uses: '5', status: 'active'}
  ];

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleOpenModalTwo () {
    this.setState({ showModalTwo: true });
    this.setState({ showModal: false });
  }
  
  handleCloseModalTwo () {
    this.setState({ showModalTwo: false });
  }

  handleOpenModalThree () {
    this.setState({ showModalThree: true });
    this.setState({ showModalTwo: false });
  }
  
  handleCloseModalThree () {
    this.setState({ showModalThree: false });
  }

  handleValueChange(e) {
    this.setState({valueChange: e.target.value});
  }

  handleQuantityChange(e) {
    this.setState({quantityChange: e.target.value});
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
        <div>
          <div>
            <i id='Animate' className="fas fa-asterisk"></i>
            <i id='AnimateTwo' className="fas fa-asterisk"></i>
            <i id='AnimateThree' className="fas fa-asterisk"></i>
          </div>
          <h1 className='mainHeading'><span className='createSpan'>Create*</span> Gift <span className='cardSpan'>Cards</span></h1>
          <button data-tip='Create' className='addButton' onClick={this.handleOpenModal}><div id='plusAnimate'>+</div></button>
          <Modal 
            isOpen={this.state.showModal}
            contentLabel='onRequestClose Example'
            onRequestClose={this.handleCloseModal}
            className='modalBox'
          >
            <h3 className='modalH3'>Bulk Create Gift Cards - Step 1</h3>
            <h6 className='white'>Select a gift card design...</h6>
            <div className='giftCardDesignBoxes'>
              <img alt='giftCard' className='giftCardImg' src={giftCard}></img>
              <img alt='giftCard' className='giftCardImg' src={giftCard}></img>
              <img alt='giftCard' className='giftCardImg' src={giftCard}></img>
              <img alt='giftCard' className='giftCardImg' src={giftCard}></img>
              <img alt='giftCard' className='giftCardImg' src={giftCard}></img>
              <img alt='giftCard' className='giftCardImg' src={giftCard}></img>
            </div>
            <button className='modalButtonCancel' onClick={this.handleCloseModal}>Cancel</button>
            <button className='modalButtonNext' onClick={this.handleOpenModalTwo}>Next</button>
          </Modal>
          <Modal 
            isOpen={this.state.showModalTwo}
            contentLabel='onRequestClose Example'
            onRequestClose={this.handleCloseModalTwo}
            className='modalBox'
          >
            <h3 className='modalH3'>Bulk Create Gift Cards - Step 2</h3>
            <h6 className='white'>Set the gift card value and quantity...</h6>
            <div className='inputBoxes'>
              <h4 className='modalHeading'>Value</h4><input className='vqInput' value={this.state.value} onChange={this.handleValueChange} placeholder='Value'></input>
              <h4 className='modalHeading'>Quantity</h4><input className='vqInput' value={this.state.quantity} onChange={this.handleQuantityChange} placeholder='Quantity'></input>
            </div>

            <button className='modalButtonCancel' onClick={this.handleCloseModalTwo}>Cancel</button>
            <button className='modalButtonNext' onClick={this.handleOpenModalThree}>Create</button>
          </Modal>
          <Modal 
            isOpen={this.state.showModalThree}
            contentLabel='onRequestClose Example'
            onRequestClose={this.handleCloseModalThree}
            className='modalBox'
          >
            <h3 className='modalH3'>Bulk Create Gift Cards - Complete</h3>
            <h6 className='white'>Download a CSV file with your gift card numbers...</h6>
            <h5 className='white'>A CSV file containing all the gift card numbers will be downloaded automatically. If the download doesn't start automatically click on the download button below.</h5>
            <div className='dowloadCsvHolder'>
              <CSVLink data={this.data} headers={this.headers}>
                Download CSV
              </CSVLink>
            </div>
            <button className='modalButtonNext' onClick={this.handleCloseModalThree}>Finish</button>
          </Modal>
        </div>
        </header>
        <ReactTooltip />
        <div className='mainContent'>
          <div className='addGiftCardBtn'></div>
          <div className='searchBarHolder'>
            <div className='filterBy'>Filter By <select><option value="Status: All">Status: All</option></select></div>
            <div className='sortBy'>Sort By <select><option value="Customer: ASC">Customer: ASC</option></select></div>
            <div className='searchBar'><input className='searchInput' placeholder='Search'></input><i className="searchIcon far fa-arrow-alt-circle-right"></i></div>
          </div>
          <div className='entryNavigation'>Showing 1 - 100 of 2000 entries<i className="icoNav fas fa-angle-double-left"></i><i className="icoNav fas fa-angle-left"></i><select><option value="100">100</option></select><i className="icoNav fas fa-angle-right"></i><i className=" icoNav fas fa-angle-double-right"></i></div>
          <div className='entryList'>
            <table className='entryTable'>
              <tbody>
                <tr className='tableHead'>
                  <th>Date Created</th>
                  <th>Ref No.</th> 
                  <th>Balance</th>
                  <th>Owner</th>
                  <th>Uses</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td className='tableData' data-tip='Date'>2018-04-05</td>
                  <td className='tableData' data-tip='
                  <table>
                    <tr>
                      <th>Order Details</th>
                      <th></th>
                      <th>Purchased by</th>
                      <th></th>
                      <th>Recipient</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>No.</td>
                      <td>ORD34897</td>
                      <td>Name</td>
                      <td>Jill Robinson</td>
                      <td>Name</td>
                      <td>Jill Robinson</td>
                    </tr>
                    <tr>
                      <td>Ref.</td>
                      <td>XYC45GH</td>
                      <td>Email</td>
                      <td>Jill@gmail.com</td>
                      <td>Email</td>
                      <td>Jill@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td>2018-04-05</td>
                      <td>Phone</td>
                      <td>+27 84 567 890</td>
                    </tr>
                    <tr>
                      <td>Value</td>
                      <td>R500.00</td>
                    </tr>
                  </table>
                  ' data-html={true}>XAB56H8</td> 
                  <td className='tableData' data-tip='Balance'>R{this.state.valueChange}</td>
                  <td className='tableData' data-tip='
                    <table>
                      <tr>
                        <th>Owner</th>
                        <th></th>
                      </tr>
                      <tr>
                        <td>Name</td>
                        <td>Jill Robinson</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>Jill@gmail.com</td>
                      </tr>
                    </table>
                  ' data-html={true}>Jill Robinson</td>
                  <td className='tableData' data-tip='
                    <table>
                      <tr>
                        <th>Order</th>
                        <th>Ref.</th>
                        <th>Date</th>
                        <th>Amount</th>
                      </tr>
                      <tr>
                        <td>ORD34897</td>
                        <td>XYC45GH</td>
                        <td>2018-04-05</td>
                        <td>R400.00</td>
                      </tr>
                      <tr>
                        <td>ORD34898</td>
                        <td>XYD36ZT</td>
                        <td>2018-04-05</td>
                        <td>R70.00</td>
                      </tr>
                    </table>
                  ' data-html={true}>{this.state.quantityChange}</td> 
                  <td className='tableData' data-tip='Status'>Active</td>
                </tr>
              </tbody>  
            </table>
          </div>
          <div className='entryNavigation'>Showing 1 - 100 of 2000 entries<i className="icoNav fas fa-angle-double-left"></i><i className="icoNav fas fa-angle-left"></i><select><option value="100">100</option></select><i className="icoNav fas fa-angle-right"></i><i className=" icoNav fas fa-angle-double-right"></i></div>
        </div>
      </div>
    );
  }
}

export default App;
