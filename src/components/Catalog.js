// Al principio del archivo
'use client';
import { useState } from 'react';
import styles from '../styles/Catalog.module.css';

export default function Catalog() {
    const [filter, setFilter] = useState('all'); // Estado para el filtro
    const [selectedItem, setSelectedItem] = useState(null); // Estado para el producto seleccionado

    const items = [
        { id: 1, name: 'Pelota de fútbol', URL: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/233ff6a4ec324e0b8027ae90fae723e0_9366/Balon_UCL_Club_24-25_League_Phase_Blanco_IX4063_01_standard.jpg', category: 'futbol', price: 30, description: 'Pelota oficial de fútbol, resistente y de alto rendimiento.' },
        { id: 2, name: 'Raqueta de tenis', URL: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1736d403561f4d489437af6600e423f3_9366/Pala_de_Padel_RX_Green_Multicolor_GC6262_04_standard.jpg', category: 'tenis', price: 60, description: 'Raqueta ligera, ideal para jugadores intermedios.' },
        { id: 3, name: 'Guantes de boxeo', URL: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/130284426_01/w=1500,h=1500,fit=pad', category: 'boxeo', price: 40, description: 'Guantes de boxeo de cuero, perfectos para entrenamientos intensos.' },
        { id: 4, name: 'Bicicleta de montaña', URL: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/119777808_01/w=1500,h=1500,fit=pad', category: 'ciclismo', price: 120, description: 'Bicicleta robusta para todo tipo de terrenos.' },
        { id: 5, name: 'Zapatillas deportivas', URL: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2e7843b6be64924943406cfaa899b82_9366/Tenis_Adizero_EVO_SL_Blanco_JH6206_01_00_standard.jpg', category: 'futbol', price: 50, description: 'Zapatillas deportivas con gran amortiguación y soporte.' },
        { id: 6, name: 'Balón de baloncesto', URL: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a44621a281149709ca4ae420163c466_9366/Balon_All_Court_3.0_Naranja_HM4975_01_standard.jpg', category: 'baloncesto', price: 35, description: 'Balón oficial de baloncesto, ideal para todo tipo de superficies.' },
        { id: 7, name: 'Patines en línea', URL: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/138406693_01/w=1500,h=1500,fit=pad', category: 'patinaje', price: 70, description: 'Patines de alta velocidad para profesionales del patinaje.' },
        { id: 8, name: 'Gafas de natación', URL: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/128286035_01/w=1500,h=1500,fit=pad', category: 'natacion', price: 15, description: 'Gafas antiniebla, perfectas para nadadores intensivos.' },
        { id: 9, name: 'Raqueta de badminton', URL: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/124496743_01/w=1500,h=1500,fit=pad', category: 'badminton', price: 25, description: 'Raqueta liviana y duradera, ideal para jugadores de todos los niveles.' },
        { id: 10, name: 'Pesa de mano', URL: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/119424268_01/w=1500,h=1500,fit=pad', category: 'pesas', price: 20, description: 'Pesa de mano de 8kg, ideal para entrenamientos en casa.' },
    ];

    const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <section id="catalog" className={styles.catalog}>
            <h2>Catálogo de Productos</h2>

            {/* Filtro */}
            <div className={styles.filter}>
                <label htmlFor="filter">Filtrar por categoría:</label>
                <select id="filter" value={filter} onChange={handleFilterChange}>
                    <option value="all">Todos</option>
                    <option value="futbol">Fútbol</option>
                    <option value="tenis">Tenis</option>
                    <option value="boxeo">Boxeo</option>
                    <option value="ciclismo">Ciclismo</option>
                    <option value="baloncesto">Baloncesto</option>
                    <option value="patinaje">Patinaje</option>
                    <option value="natacion">Natación</option>
                    <option value="badminton">Bádminton</option>
                    <option value="pesas">Pesas</option>
                </select>
            </div>

            {/* Productos */}
            <div className={styles.grid}>
                {filteredItems.map(item => (
                    <div key={item.id} className={styles.card}>
                        <img src={item.URL} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <button className={styles.button} onClick={() => handleItemClick(item)}>Ver más detalles</button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedItem && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <button className={styles.closeButton} onClick={closeModal}>X</button>
                        <h3>{selectedItem.name}</h3>
                        <img src={selectedItem.URL} alt={selectedItem.name} className={styles.modalImage} />
                        <p><strong>Precio:</strong> ${selectedItem.price}</p>
                        <p><strong>Descripción:</strong> {selectedItem.description}</p>
                    </div>
                </div>
            )}

        </section>
    );
}




