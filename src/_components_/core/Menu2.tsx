import React from 'react';
import { Box, Typography } from '@mui/material';
import WaveShape3 from './WaveSVG3';

export default function Menu() {
    return (
        <>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                    gap: 4,
                    padding: 2,
                    width: "90%",
                    height: "100%",
                    backgroundColor: "custom.beige",
                    borderX: "1px solid red ",
                    position: "relative",
                    paddingTop: "10rem",
                    margin: "auto"
                }}
            >
                <Box sx={{ overflowX: "hidden", position: "absolute", top: -1, width: "100vw" }}>
                    <WaveShape3 />
                </Box>
                {/* First Column */}
                <Box>
                    {/* Bagels Section */}
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'red' }}>
                        BAGELS
                    </Typography>
                    {[
                        {
                            title: 'CREAM CHEESE BAGEL / 9',
                            description: 'Cream cheese schmear sprinkled with chives',
                        },
                        {
                            title: 'SALMON BAGEL / 16.5',
                            description: 'Smoked salmon, tomato & BG cream cheese (capers, red onion & dill)',
                        },
                        {
                            title: 'BREAKFAST BAGEL / 16.5',
                            description:
                                'Folded scramble eggs, bacon, hash brown, spinach, smashed avo and house-made relish & honey mustard mayo',
                        },
                        {
                            title: 'EGGS BENNY BAGEL / 18',
                            description:
                                'Poached eggs spinach on a choice of bacon, mortadella, mushroom (v) and smoked salmon + 3',
                        },
                        {
                            title: 'MICKY G’s / 16.5',
                            description:
                                'Poached eggs spinach on a choice of bacon, mortadella, mushroom (v) and smoked salmon + 3',
                        },
                        {
                            title: 'SPAM / 16.5',
                            description: 'Grill spam, fried egg, cheese, Big G sauce, sweet soy sauce, tabasco',
                        },
                    ].map((item, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'red' }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'red' }}>
                                {item.description}
                            </Typography>
                        </Box>
                    ))}

                    {/* HELLO, GOOD THANKS! Section */}
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'red' }}>
                        HELLO, GOOD THANKS!
                    </Typography>
                    {[
                        {
                            title: 'BACON & EGG ROLL / 13',
                            description:
                                'Folded egg, smashed avocado and feta cheese, bacon, hash brown, house-made tomato relish, honey mustard mayo and spinach.',
                        },
                        {
                            title: 'ACAI BOWL / 15.5',
                            description: 'Acai, house-made muesli & seasonal fruit. \n Add peanut butter / 2 \n Add biscoff toppings / 3',
                        },
                    ].map((item, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'red' }}>
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'red',
                                    whiteSpace: 'pre-line' // Preserves line breaks from '\n'
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    ))}

                    {/* Add-ons Section */}
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'red', display: { xs: "none", lg: "flex" } }}>
                        ADD ONS
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'red' }}>
                        FRIES / 4.5, SALAMI / 4, HAM / 5, SCHNITZ / 8, CHEESE / 2, AVOCADO / 4, MORTADELLA / 6, BACON /5,
                        SALMON /7
                    </Typography>
                </Box>

                {/* Second Column */}
                <Box>
                    {/* Sandwiches Section */}
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'red' }}>
                        SANDWICHES
                    </Typography>
                    {[
                        {
                            title: 'MUSHROOM MELT / 14',
                            description:
                                'Garlic mushrooms, caramelised onions & baby spinach with two cheese on a toasted rustic niche bread',
                        },
                        {
                            title: 'REUBEN / 16.5',
                            description:
                                'Pastrami, pickles, sauerkraut, pickled onion, honey mustard mayo & swiss cheese in a toasted rustic niche bread',
                        },
                        {
                            title: 'SCHNITZ & GIGS / 16.5',
                            description: 'Chicken schnitzel, iceberg lettuce, Big G sauce in-between white tin load bread - Add cheese /2',
                        },
                        {
                            title: 'WOG BOY / 16.5',
                            description:
                                'Stacked ham, mortadella, provolone, salami, red onion, marinated capsicum, basil',
                        },
                        {
                            title: 'DENMARK STYLE TUNA ROLL / 16.5',
                            description:
                                'House-made tuna paste made w/ Kewpie mayo, sliced tomato, mixed leaves and smashed avo - Add fried egg / 3',
                        },
                        {
                            title: 'SALAD SANDWICH (V) / 15.5',
                            description:
                                'BG cream cheese, beetroot relish, house-made relish, carrot, tomato, pickles & iceberg lettuce on white tin load bread - Add cheese/2',
                        },
                    ].map((item, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'red' }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'red' }}>
                                {item.description}
                            </Typography>
                        </Box>
                    ))}

                    {/* Other Good Food Section */}
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'red' }}>
                        OTHER GOOD FOOD
                    </Typography>
                    {[
                        {
                            title: 'EGGS YOUR WAY with toast / 10.5',
                            description: 'Add bacon / 6 , Avocado / 4, Salmon / 7',
                        },
                        {
                            title: 'SMASHED AVO / 18',
                            description:
                                'Smashed avo, feta, cherry tomatoes, two poached eggs, bacon topped off with balsamic vinegar',
                        },
                        {
                            title: 'VELVET CHICKEN SALAD / 18',
                            description:
                                'Chicken schnitzel, roasted beetroot, tomato, cucumber, iceberg lettuce, homemade dressing topped with feta.',
                        },
                        {
                            title: 'TUNA SALAD / 18',
                            description:
                                'House-made tuna salad, toasted almonds, sliced pickles, cherry tomatoes, cucumbers and sliced onions',
                        },
                    ].map((item, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'red' }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'red' }}>
                                {item.description}
                            </Typography>
                        </Box>
                    ))}

                    {/* Add-ons Section */}
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'red', display: { xs: "flex", lg: "none" } }}>
                        ADD ONS
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'red' }}>
                        FRIES / 4.5, SALAMI / 4, HAM / 5, SCHNITZ / 8, CHEESE / 2, AVOCADO / 4, MORTADELLA / 6, BACON /5,
                        SALMON /7
                    </Typography>
                </Box>
            </Box>
        </>
    );
};