import MenuListItem from "./MenuListItem"
import { Box, Typography } from "@mui/material"
import Image from "next/image"

import largeMascot from '/public/_assets_/images/largeMascot.png';

export default function Menu() {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "center", alignItems: "center" }}>
                {/* First Column */}
                <Box sx={{ textAlign: { xs: "left", lg: "right" }, width: "90%", height: "100%" }}>
                    <Box sx={{ display: "flex", order: { xs: 2 }, flexDirection: "column" }}>
                        <Box sx={{ display: { xs: "block", lg: "none" } }}>
                            <Typography sx={{ fontSize: "25px", fontWeight: 500, fontFamily: "Acme", color: "custom.red", textAlign: { xs: "left", lg: "right" } }}>HELLO, GOOD THANKS!</Typography>
                            <MenuListItem item="BACON & EGG ROLL / 13" description={"Folded egg, smashed avocado and feta cheese, bacon, hash brown,\nhouse-made tomato relish, honey mustard mayo and spinach."} />
                            <MenuListItem item="ACAI BOWL / 15.5" description={"Acai, house-made muesli & seasonal fruit.\nAdd peanut butter / 2\nAdd biscoff toppings / 3"} />
                        </Box>
                        <Box sx={{ display: "block", paddingBottom: { xs: 0, lg: "23px" } }}>
                            <Typography sx={{ fontSize: "25px", fontWeight: 400, fontFamily: "Acme", color: "custom.red", textAlign: { xs: "left", lg: "right" } }}>BAGELS</Typography>
                            <MenuListItem item="CREAM CHEESE BAGEL / 9" description="Cream cheese schmear sprinkled with chives" />
                        </Box>
                        <MenuListItem item="SALMON BAGEL / 16.5" description={"Smoked salmon, tomato & BG cream cheese\n(capers, red onion & dill)"} />
                        <MenuListItem item="BREAKFAST BAGEL / 16.5" description={"Folded scramble eggs, bacon, hash brown, spinach,\nsmashed avo and house-made relish & honey mustard mayo"} />
                        <MenuListItem item="EGGS BENNY BAGEL / 18" description={"Poached eggs spinach on a choice of bacon, mortadella,\nmushroom (v) and smoked salmon + 3"} />
                        <MenuListItem item="MICKY G’s / 16.5" description={"Poached eggs spinach on a choice of bacon, mortadella,\nmushroom (v) and smoked salmon + 3"} />
                        <MenuListItem item="SPAM / 16.5" description={"Grill spam, fried egg, cheese, Big G sauce, sweet soy\nsauce, tabasco"} />
                    </Box>

                    <Box sx={{ display: { xs: "none", lg: "block" } }}>
                        <Typography sx={{ fontSize: "25px", fontWeight: 500, fontFamily: "Acme", color: "custom.red", textAlign: { xs: "left", lg: "right" } }}>HELLO, GOOD THANKS!</Typography>
                        <MenuListItem item="BACON & EGG ROLL / 13" description={"Folded egg, smashed avocado and feta cheese, bacon, hash brown,\nhouse-made tomato relish, honey mustard mayo and spinach."} />
                        <MenuListItem item="ACAI BOWL / 15.5" description={"Acai, house-made muesli & seasonal fruit.\nAdd peanut butter / 2\nAdd biscoff toppings / 3"} />
                    </Box>
                    <Box sx={{ display: { xs: "none", lg: "block" }, paddingTop: "25px", order: { xs: 3 }, flexDirection: "column" }}>
                        <Typography sx={{ fontSize: "25px", fontWeight: 500, fontFamily: "Acme", color: "custom.red", textAlign: { xs: "left", lg: "right" } }}>ADD ONS</Typography>
                        <Typography sx={{ fontSize: "15px", fontFamily: "Quicksand", fontWeight: 300, color: "custom.red", marginBottom: "10px", whiteSpace: { xs: "normal", lg: "pre-wrap" }, textAlign: { xs: "left", lg: "right" } }}>{"FRIES / 4.5, SALAMI / 4, HAM / 5, SCHNITZ / 8, CHEESE / 2,\n AVOCADO / 4, MORTADELLA / 6, BACON /5, SALMON /7"}</Typography>
                    </Box>
                </Box>
                {/* Divider */}
                <Box sx={{ height: "900px", width: "4px", backgroundColor: "custom.red", marginX: "40px", display: { xs: "none", lg: "flex" } }} />

                {/* Second Column */}
                <Box sx={{ textAlign: "left", height: "100%", width: "90%", paddingTop: "2px" }}>
                    <Box>
                        <Typography sx={{ fontSize: "25px", fontWeight: 400, fontFamily: "Acme", color: "custom.red" }}>SANDWICHES</Typography>
                        <MenuListItem item="MUSHROOM MELT / 14" description={"Garlic mushrooms, caramelised onions & baby spinach with two cheese\non a toasted rustic niche bread"} />
                        <MenuListItem item="REUBEN / 16.5" description={"Pastrami, pickles, sauerkraut, pickled onion, honey mustard mayo &\nswiss cheese in a toasted rustic niche bread"} />
                        <MenuListItem item="SCHNITZ & GIGS / 16.5" description={"Chicken schnitzel, iceberg lettuce, Big G sauce in-between white tin load\nbread - Add cheese /2"} />
                        <MenuListItem item="WOG BOY / 16.5" description={"Stacked ham, mortadella, provolone, salami, red onion, marinated\ncapsicum, basil"} />
                        <MenuListItem item="DENMARK STYLE TUNA ROLL / 16.5" description={"House-made tuna paste made w/ Kewpie mayo, sliced tomato, mixed\nleaves and smashed avo - Add fried egg / 3"} />
                        <MenuListItem item="SALAD SANDWICH (V) / 15.5" description={"BG cream cheese, beetroot relish, house-made relish, carrot, tomato,\npickles & iceberg lettuce on white tin load bread - Add cheese/2"} />
                    </Box>

                    <Box>
                        <Typography sx={{ fontSize: "25px", fontWeight: 400, fontFamily: "Acme", color: "custom.red" }}>OTHER GOOD FOOD</Typography>
                        <MenuListItem item="EGGS YOUR WAY with toast / 10.5" description={"Add bacon / 6 , Avocado / 4, Salmon / 7"} />
                        <MenuListItem item="SMASHED AVO / 18" description={"Smashed avo, feta, cherry tomatoes, two poached eggs, bacon topped\noff with balsamic vinegar"} />
                        <MenuListItem item="VELVET CHICKEN SALAD / 18" description={"Chicken schnitzel, roasted beetroot, tomato, cucumber, iceberg lettuce,\nhomemade dressing topped with feta."} />
                        <MenuListItem item="TUNA SALAD / 18" description={"House-made tuna salad, toasted almonds, sliced pickles, cherry\ntomatoes, cucumbers and sliced onions"} />
                    </Box>

                    <Box sx={{ display: { xs: "block", lg: "none" } }}>
                        <Typography sx={{ fontSize: "25px", fontWeight: 500, fontFamily: "Acme", color: "custom.red", textAlign: { xs: "left", lg: "right" } }}>ADD ONS</Typography>
                        <Typography sx={{ fontSize: "15px", fontFamily: "Quicksand", fontWeight: 300, color: "custom.red", marginBottom: "10px", whiteSpace: { xs: "normal", lg: "pre-wrap" }, textAlign: { xs: "left", lg: "right" } }}>{"FRIES / 4.5, SALAMI / 4, HAM / 5, SCHNITZ / 8, CHEESE / 2,\n AVOCADO / 4, MORTADELLA / 6, BACON /5, SALMON /7"}</Typography>
                    </Box>
                </Box >
            </Box >
            <Typography sx={{ textAlign: "center", fontSize: "50px", fontWeight: 800, color: "custom.red", marginY: "0.5em" }}>BEVVIES</Typography>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "center", alignItems: "center" }}>
                {/* First Column */}
                <Box sx={{ textAlign: { xs: "left", lg: "right" }, width: "90%", height: "100%" }}>
                    <Box>
                        <Typography sx={{ fontSize: "25px", fontWeight: 400, fontFamily: "Acme", color: "custom.red", textAlign: { xs: "left", lg: "right" } }}>MILKSHAKES</Typography>
                        <Typography sx={{ fontSize: "15px", fontFamily: "Quicksand", fontWeight: 300, color: "custom.red", marginBottom: "10px", whiteSpace: { xs: "normal", lg: "pre-wrap" }, textAlign: { xs: "left", lg: "right" } }}>{"CHOCOLATE, STRAWBERRY, VANILLA OR CARAMEL\n4.5 (KIDS) 6.5 (L)\nBISCOFF 8"}</Typography>
                    </Box>

                    <Box>
                        <Typography sx={{ fontSize: "25px", fontWeight: 400, fontFamily: "Acme", color: "custom.red", textAlign: { xs: "left", lg: "right" } }}>FRESHLY SQUEEZED JUICE</Typography>
                        <Typography sx={{ fontSize: "15px", fontFamily: "Quicksand", fontWeight: 300, color: "custom.red", marginBottom: "10px", whiteSpace: { xs: "normal", lg: "pre-wrap" }, textAlign: { xs: "left", lg: "right" } }}>{"GREEN - apple, cucumber, celery and lemon\nPINK - watermelon and strawberry\nORANGE\nAPPLE"}</Typography>
                    </Box>

                    <Box>
                        <Typography sx={{ fontSize: "25px", fontWeight: 400, fontFamily: "Acme", color: "custom.red", textAlign: { xs: "left", lg: "right" } }}>SMOOTHIES</Typography>
                        <Typography sx={{ fontSize: "15px", fontFamily: "Quicksand", fontWeight: 300, color: "custom.red", marginBottom: "10px", whiteSpace: { xs: "normal", lg: "pre-wrap" }, textAlign: { xs: "left", lg: "right" } }}>{"BANANA, BERRY / 8\nDairy free options: TROPICAL, MANGO / 8"}</Typography>
                    </Box>
                </Box>
                {/* Divider */}
                <Box sx={{ height: "375px", width: "4px", backgroundColor: "custom.red", marginX: "40px", display: { xs: "none", lg: "flex" } }} />
                {/* Second Column */}
                <Box sx={{ textAlign: "left", height: "100%", width: "90%" }}>
                    <Typography sx={{ fontSize: "25px", fontWeight: 400, fontFamily: "Acme", color: "custom.red", paddingBottom: { xs: 0, lg: "1em" } }}>COFFEE</Typography>
                    <Typography sx={{ fontSize: "15px", fontFamily: "Quicksand", fontWeight: 300, color: "custom.red", marginBottom: "10px", whiteSpace: "pre-wrap", lineHeight: "2em" }}>{"WHITE 4.5 (S) 5.3 (L)\nBLACK 4.5 (S) 5.3 (L)\nBATCH OR COLD BREW 6.5\nBISCOFF LATTE 5.5 (S) 6.5 (L)\nICED LATTE 5.5 (S) 6 (L)\nICED COFFEE 7\nSTICKY CHAI TEA 5.5\nHOT CHOCOLATE 4.5 (S) 5.3 (L)\nALTERNATIVE MILK OPTIONS 0.70"}</Typography>
                </Box>
                <Box sx={{ position: "absolute", right: { xs: "1.5em", sm: "5rem", lg: "15em" }, marginTop: { xs: "20em", lg: "4em" }, height: { xs: "173px", lg: "253px" }, width: { xs: "112px", lg: "164px" } }}>
                    <Image src={largeMascot} alt="Mascot" style={{ width: "100%", height: "auto" }} />
                </Box>
            </Box >
        </>
    )
}