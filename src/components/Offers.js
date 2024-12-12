'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/Offers.module.css';

export default function Offers() {
    // Lista de ofertas especiales
    const allOffers = [
        { id: 1, name: 'Pelota de fútbol', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFS-aZ9xyrIW-2pjT8aRkWc1W0kJn1U4YA5A&s', originalPrice: 30, discountPrice: 15, category: 'Fútbol' },
        { id: 2, name: 'Raqueta de tenis', img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1736d403561f4d489437af6600e423f3_9366/Pala_de_Padel_RX_Green_Multicolor_GC6262_04_standard.jpg', originalPrice: 60, discountPrice: 40, category: 'Tenis' },
        { id: 3, name: 'Guantes de boxeo', img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/130284426_01/w=1500,h=1500,fit=pad', originalPrice: 40, discountPrice: 25, category: 'Boxeo' },
        { id: 4, name: 'Bicicleta de montaña', img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/119777808_01/w=1500,h=1500,fit=pad', originalPrice: 120, discountPrice: 90, category: 'Ciclismo' },
        { id: 5, name: 'Zapatillas deportivas', img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2e7843b6be64924943406cfaa899b82_9366/Tenis_Adizero_EVO_SL_Blanco_JH6206_01_00_standard.jpg', originalPrice: 50, discountPrice: 30, category: 'Fútbol' },
    ];

    const [offers, setOffers] = useState(allOffers); // Estado para las ofertas filtradas
    const [categoryFilter, setCategoryFilter] = useState(''); // Filtro de categoría

    // Temporizador de cuenta regresiva
    const [timeLeft, setTimeLeft] = useState(1440 * 60); // Tiempo en segundos (30 minutos)

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeLeft((prev) => prev > 0 ? prev - 1 : 0);
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    // Convertir segundos a formato hh:mm:ss
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Filtrar ofertas por categoría
    const handleFilterChange = (event) => {
        const filter = event.target.value;
        setCategoryFilter(filter);
        setOffers(filter ? allOffers.filter(offer => offer.category === filter) : allOffers);
    };

    return (
        <section id="offers" className={styles.offers}>
            <h2>Ofertas Especiales</h2>
            <p className={styles.subtitle}>¡Aprovecha descuentos de hasta el 50% en productos seleccionados!</p>

            {/* Filtro de categoría */}
            <div className={styles.filterContainer}>
                <label htmlFor="categoryFilter">Filtrar por categoría:</label>
                <select id="categoryFilter" value={categoryFilter} onChange={handleFilterChange}>
                    <option value="">Todas</option>
                    <option value="Fútbol">Fútbol</option>
                    <option value="Tenis">Tenis</option>
                    <option value="Boxeo">Boxeo</option>
                    <option value="Ciclismo">Ciclismo</option>
                </select>
            </div>

            {/* Temporizador */}
            <div className={styles.timer}>
                <p>¡Las ofertas terminan en:</p>
                <div className={styles.countdown}>
                    <span>{formatTime(timeLeft)}</span>
                </div>
            </div>

            {/* Animación de las ofertas */}
            <div className={styles.offersGrid}>
                {offers.map((offer) => (
                    <div key={offer.id} className={`${styles.offerCard} ${styles.fadeIn}`}>
                        <img src={offer.img} alt={offer.name} className={styles.offerImage} />
                        <div className={styles.offerDetails}>
                            <h3>{offer.name}</h3>
                            <p className={styles.originalPrice}>${offer.originalPrice}</p>
                            <p className={styles.discountPrice}>${offer.discountPrice}</p>
                            <p className={styles.discount}>
                                ¡{Math.round(((offer.originalPrice - offer.discountPrice) / offer.originalPrice) * 100)}% OFF!
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
