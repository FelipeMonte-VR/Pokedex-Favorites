import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from '@testing-library/jest-dom';

import React from "react";
import Header from "../components/header/Header";


describe('Cabeçalho', () => {
    describe('Quando eu carrego um página com cabeçalho', () => {
        it('o logo é exibido', () => {
            render(<Header />);
    
            expect(screen.getByAltText('Logo do Pokemon')).toBeInTheDocument();
        });
        
        it('o link para favoritos é exibido', () => {
            render(<Header />);
    
            expect(screen.getByText('Meus Favoritos')).toBeInTheDocument();
        });
    
    
    })
    
})
