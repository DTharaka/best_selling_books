import React, { Component } from 'react'
import { connect } from 'react-redux';
import Spinner from '../Spinner';

import SearchBooksForm from './SearchBooksForm';
import BooksContainer from './BooksContainer';

export class Landing extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className="container">
                <SearchBooksForm/>
                {
                    loading ? <Spinner /> : <BooksContainer />
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading : state.books.loading
});

export default connect(mapStateToProps)(Landing);
